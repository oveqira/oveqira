import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text, Eyebrow } from '../components/ui/Typography';
import { siteConfig } from '../data';
import { Button } from '../components/ui/Button';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const newErrors: Record<string, string> = {};
    
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(data.email as string)) newErrors.email = 'Invalid email address';
    if (!data.details) newErrors.details = 'Project details are required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      // e.target.reset(); // Wait, TypeScript complains if we don't cast
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <Section  className="pt-32 pb-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Context & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Eyebrow prefix="CONNECT //" hasIndicator indicatorColor="accent">Start a Conversation</Eyebrow>
                <Heading level="display" className="!leading-[0.9]">Let's Build Something That Moves Your Business Forward.</Heading>
                <Text variant="large" muted>
                  Tell us what you're building, what you're trying to improve, or where you need help.
                </Text>
              </div>
              
              <div className="space-y-6 pt-8 border-t border-[var(--border)]">
                <div>
                  <Text subtle variant="small" className="font-mono uppercase tracking-widest mb-1">Email</Text>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                    hello@oveqira.com
                  </a>
                </div>
                <div>
                  <Text subtle variant="small" className="font-mono uppercase tracking-widest mb-1">Phone</Text>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--border)]/30 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <Text subtle variant="small" className="font-mono uppercase tracking-widest mb-1">WhatsApp Us</Text>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-[8px] p-6 md:p-8 relative overflow-hidden"
            >
              <Heading level="h3" className="mb-6">Project Inquiry</Heading>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <Heading level="h4">Inquiry Received</Heading>
                    <Text muted variant="small" className="max-w-xs mx-auto">
                      Thank you for reaching out. We will review your project details and respond within 24 hours.
                    </Text>
                    <Button variant="ghost" size="sm" onClick={() => setStatus('idle')} className="mt-4">
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Name *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          className={`w-full h-12 bg-transparent border ${errors.name ? 'border-red-500/50' : 'border-[var(--border)]'} rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
                          placeholder="Your Name"
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="company" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Company</label>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          className="w-full h-12 bg-transparent border border-[var(--border)] rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Email *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          className={`w-full h-12 bg-transparent border ${errors.email ? 'border-red-500/50' : 'border-[var(--border)]'} rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
                          placeholder="jane@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Phone</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          className="w-full h-12 bg-transparent border border-[var(--border)] rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="service" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Service</label>
                        <select 
                          id="service"
                          name="service"
                          className="w-full h-12 bg-transparent border border-[var(--border)] rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none"
                        >
                          <option value="web-design" className="bg-[var(--surface-hover)]">Web Design & Architecture</option>
                          <option value="engineering" className="bg-[var(--surface-hover)]">Full-Stack Engineering</option>
                          <option value="growth" className="bg-[var(--surface-hover)]">Digital Growth & SEO</option>
                          <option value="other" className="bg-[var(--surface-hover)]">Other / Multiple</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="budget" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Budget</label>
                        <select 
                          id="budget"
                          name="budget"
                          className="w-full h-12 bg-transparent border border-[var(--border)] rounded-[4px] px-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none"
                        >
                          <option value="under-10k" className="bg-[var(--surface-hover)]">&lt; $10k</option>
                          <option value="10k-25k" className="bg-[var(--surface-hover)]">$10k - $25k</option>
                          <option value="25k-50k" className="bg-[var(--surface-hover)]">$25k - $50k</option>
                          <option value="50k+" className="bg-[var(--surface-hover)]">$50k+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="details" className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">Project Details *</label>
                      <textarea 
                        id="details"
                        name="details"
                        rows={4}
                        className={`w-full bg-transparent border ${errors.details ? 'border-red-500/50' : 'border-[var(--border)]'} rounded-[4px] p-4 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y min-h-[100px]`}
                        placeholder="Tell us about your objectives, timeline, and challenges..."
                      />
                      {errors.details && <p className="text-xs text-red-400 mt-1">{errors.details}</p>}
                    </div>
                    
                    {status === 'error' && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-[4px]">
                        <p className="text-sm text-red-400">An unexpected error occurred. Please try again or email us directly.</p>
                      </div>
                    )}
                    
                    
                    <div className="pt-2 pb-4">
                      <p className="text-xs text-[var(--foreground-muted)] text-center leading-relaxed">
                        By submitting this form, you acknowledge that your information may be used to respond to your inquiry. See our <Link to="/privacy-policy" className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">Privacy Policy</Link> for more information.
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        
                        className="w-full justify-center"
                        isLoading={status === 'submitting'}
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Discuss Your Project'}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
