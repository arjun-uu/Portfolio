import React from 'react';
import { FiMail, FiSend, FiUser, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import { siteConfig } from '../../constants/site';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { useContact } from './hooks/useContact';
import { socialLinks } from '../../data/socialLinks';

export function ContactPage() {
  const {
    form,
    errors,
    isSubmitting,
    handleInputChange,
    handleBlur,
    handleSubmit
  } = useContact();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in-up">
      {/* Heading */}
      <SectionHeading
        title="contact --send"
        subtitle="Establish a socket connection. Send me inquiries, contract proposals, or greeting packages."
        icon={FiMail}
        badge="Socket"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left/Center Column: The Form */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
              
              {/* Field: Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-slate-400 font-bold flex items-center gap-1.5 select-none">
                  <FiUser />
                  <span>SENDER_NAME:</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="e.g., Arjun Dev"
                  className="bg-brand-bg-dark border border-brand-border-dark focus:border-brand-accent-primary/60 focus:ring-1 focus:ring-brand-accent-primary/40 rounded p-2.5 text-white placeholder-slate-600 focus:outline-none"
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-500 font-bold">{errors.name}</span>
                )}
              </div>

              {/* Field: Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-slate-400 font-bold flex items-center gap-1.5 select-none">
                  <FiMail />
                  <span>SENDER_EMAIL:</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="e.g., sender@example.com"
                  className="bg-brand-bg-dark border border-brand-border-dark focus:border-brand-accent-primary/60 focus:ring-1 focus:ring-brand-accent-primary/40 rounded p-2.5 text-white placeholder-slate-600 focus:outline-none"
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-500 font-bold">{errors.email}</span>
                )}
              </div>

              {/* Field: Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-slate-400 font-bold flex items-center gap-1.5 select-none">
                  <FiMessageSquare />
                  <span>MESSAGE_PAYLOAD:</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Type your connection details here (min 10 characters)..."
                  className="bg-brand-bg-dark border border-brand-border-dark focus:border-brand-accent-primary/60 focus:ring-1 focus:ring-brand-accent-primary/40 rounded p-2.5 text-white placeholder-slate-600 focus:outline-none resize-none"
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 font-bold">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 select-none">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  rightIcon={<FiSend />}
                  className="w-full sm:w-auto"
                >
                  Compile & Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Right Column: Connection Meta */}
        <div className="flex flex-col gap-6 select-none font-mono">
          {/* Connection Specs */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">// CONNECTION SPECS</h3>
            
            <div className="flex flex-col gap-3.5 text-xs text-slate-400">
              <div className="flex gap-2.5 items-start">
                <FiMapPin className="text-brand-accent-secondary mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">Node Location:</span>
                  <span className="text-[11px] font-sans mt-0.5 text-slate-400">{siteConfig.location}</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <FiMail className="text-brand-accent-secondary mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">Target Inbound:</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-[11px] text-brand-accent-primary hover:underline mt-0.5 break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Profiles */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">// SOCIAL NETWORKS</h3>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-brand-bg-panel border border-brand-border-dark/65 rounded text-slate-400 hover:text-brand-accent-primary hover:border-brand-accent-primary/40 transition-all select-none"
                  >
                    <Icon className="text-sm shrink-0" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
