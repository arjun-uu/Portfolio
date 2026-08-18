import { useState, useEffect } from 'react';

export function usePasswordGenerator() {
  const [pwLength, setPwLength] = useState(16);
  const [pwOptions, setPwOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    };

    let allowedPool = '';
    let guaranteedChars = '';

    if (pwOptions.uppercase) {
      allowedPool += chars.uppercase;
      guaranteedChars += chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)];
    }
    if (pwOptions.lowercase) {
      allowedPool += chars.lowercase;
      guaranteedChars += chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)];
    }
    if (pwOptions.numbers) {
      allowedPool += chars.numbers;
      guaranteedChars += chars.numbers[Math.floor(Math.random() * chars.numbers.length)];
    }
    if (pwOptions.symbols) {
      allowedPool += chars.symbols;
      guaranteedChars += chars.symbols[Math.floor(Math.random() * chars.symbols.length)];
    }

    if (!allowedPool) {
      setGeneratedPassword('');
      return;
    }

    let password = guaranteedChars;
    for (let i = password.length; i < pwLength; i++) {
      const randIdx = Math.floor(Math.random() * allowedPool.length);
      password += allowedPool[randIdx];
    }

    const shuffledPassword = password
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');

    setGeneratedPassword(shuffledPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [pwLength, pwOptions]);

  const toggleOption = (option: 'uppercase' | 'lowercase' | 'numbers' | 'symbols') => {
    setPwOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPasswordStrength = () => {
    if (!generatedPassword) return { label: 'Empty', color: 'text-slate-500 bg-slate-500/10' };
    
    let entropy = 0;
    const poolSize = 
      (pwOptions.uppercase ? 26 : 0) +
      (pwOptions.lowercase ? 26 : 0) +
      (pwOptions.numbers ? 10 : 0) +
      (pwOptions.symbols ? 32 : 0);

    if (poolSize > 0) {
      entropy = Math.log2(poolSize) * pwLength;
    }

    if (entropy < 40) return { label: 'Weak', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' };
    if (entropy < 60) return { label: 'Medium', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
    if (entropy < 80) return { label: 'Strong', color: 'text-brand-accent-secondary bg-brand-accent-secondary/10 border-brand-accent-secondary/20' };
    return { label: 'Excellent', color: 'text-brand-accent-primary bg-brand-accent-primary/10 border-brand-accent-primary/20 animate-pulse' };
  };

  return {
    pwLength,
    setPwLength,
    pwOptions,
    toggleOption,
    generatedPassword,
    generatePassword,
    copied,
    handleCopy,
    strength: getPasswordStrength()
  };
}
