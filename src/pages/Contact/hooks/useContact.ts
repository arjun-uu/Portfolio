import { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { siteConfig } from '../../../constants/site';

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useContact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required.';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message content cannot be empty.';
      if (value.trim().length < 10) return 'Message must exceed 10 characters.';
    }
    return '';
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Dynamic verification: clear/update errors only if the field is currently flagged with an error
    if (errors[name as keyof FormErrors]) {
      const fieldError = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: fieldError || undefined }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError || undefined }));
  };

  const validateAll = (): boolean => {
    const tempErrors: FormErrors = {
      name: validateField('name', form.name) || undefined,
      email: validateField('email', form.email) || undefined,
      message: validateField('message', form.message) || undefined,
    };

    const finalErrors: FormErrors = {};
    let isValid = true;
    (Object.keys(tempErrors) as Array<keyof FormErrors>).forEach(key => {
      if (tempErrors[key]) {
        finalErrors[key] = tempErrors[key];
        isValid = false;
      }
    });

    setErrors(finalErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (!validateAll()) {
    toast.error('Please check the highlighted fields and try again.');
    return;
  }

  if (
    !siteConfig.web3FormsKey ||
    siteConfig.web3FormsKey === '06b496e3-7f93-4b7e-9fe8-37844da539ef'
  ) {
    toast.warning(
      'The contact form is currently unavailable. Please try again later.'
    );
    return;
  }

  setIsSubmitting(true);

  const payload = {
    access_key: siteConfig.web3FormsKey,
    name: form.name,
    email: form.email,
    message: form.message,
    subject: `New Portfolio Message from ${form.name}`,
  };

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      setIsSubmitting(false);

      try {
        const data = await response.json();

        if (response.ok && data.success) {
          toast.success(
            'Thanks for reaching out! Your message has been sent successfully.'
          );

          setForm({ name: '', email: '', message: '' });
          setErrors({});
        } else {
          toast.error(
            data.message || 'Something went wrong while sending your message. Please try again.'
          );
        }
      } catch {
        toast.error(
          'We couldn’t process the response. Please try again in a moment.'
        );
      }
    })
    .catch(() => {
      setIsSubmitting(false);
      toast.error(
        'Unable to send your message right now. Please check your internet connection and try again.'
      );
    });
};
  return {
    form,
    errors,
    isSubmitting,
    handleInputChange,
    handleBlur,
    handleSubmit
  };
}
