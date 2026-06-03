import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CDN } from '../lib/cdn';
import styles from './TestimonialContact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  property_address: string;
  message: string;
}

const empty: FormData = {
  name: '',
  email: '',
  phone: '',
  brokerage: '',
  property_address: '',
  message: '',
};

export default function TestimonialContact() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('submitting');
    const { error } = await supabase.from('contact_submissions').insert([form]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm(empty);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left: testimonial — sits on dark bg with faint photo texture */}
          <div className={styles.testimonialCol}>
            <div className={styles.testimonialInner}>
              <span className={styles.eyebrow}>What Agents Are Saying</span>
              <blockquote className={styles.quote}>
                &ldquo;This show helped us win the listing, new more ideal clients, and build a
                brand that truly stands out in a crowded market.&rdquo;
              </blockquote>
              <div className={styles.attribution}>
                <img src={CDN.testimonialCard} alt="Michael Reynolds" className={styles.avatar} />
                <div>
                  <p className={styles.attrName}>Michael Reynolds</p>
                  <p className={styles.attrRole}>Top Producing Agent</p>
                </div>
              </div>
              <div className={styles.ctaRow}>
                <a href="#contact" className="btn btn-gold">Request More Info</a>
                <a href="#contact" className={styles.outlineBtn}>Book a Call</a>
              </div>
            </div>
          </div>

          {/* Center: Malinda portrait */}
          <div className={styles.portraitCol}>
            <div className={styles.portraitFrame}>
              <img
                src="/assets/malinda-host-portrait.png"
                alt="Malinda — Beyond the Listing host"
              />
            </div>
          </div>

          {/* Right: contact form */}
          <div id="contact" className={styles.formCol}>
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Request Received!</h3>
                <p>We&rsquo;ll be in touch shortly to discuss your listing opportunity.</p>
                <button className="btn btn-gold" onClick={() => setStatus('idle')}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                  <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
                  <input type="text" name="brokerage" placeholder="Brokerage" value={form.brokerage} onChange={handleChange} />
                  <input type="text" name="property_address" placeholder="Property Address (or Area)" value={form.property_address} onChange={handleChange} className={styles.fullWidth} />
                  <textarea name="message" placeholder="Tell us about the property" value={form.message} onChange={handleChange} className={styles.fullWidth} />
                </div>
                {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
                <button type="submit" className={`btn btn-gold btn-block ${styles.submitBtn}`} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request More Info'}
                </button>
                <p className={styles.privacyNote}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
