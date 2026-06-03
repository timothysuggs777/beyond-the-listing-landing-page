import { useState } from 'react';
import { supabase } from './lib/supabase';

const CDN = 'https://cdn.jsdelivr.net/gh/timothysuggs777/beyond-the-listing-landing-page@main/assets';
const LOGO = `${CDN}/beyond_the_listing_logo_design.png?v=6`;
const HERO_THUMB = `${CDN}/malinda-hero.png?v=1`;
const CONTACT_PORTRAIT = `${CDN}/malinda-contact.png?v=20260603-contact`;
const HOST_PORTRAIT = `${CDN}/contact-section-malinda-warm-portrait.png?v=5`;

interface FormState {
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  property: string;
  message: string;
  companyWebsite: string; // honeypot
}

const emptyForm: FormState = { name: '', email: '', phone: '', brokerage: '', property: '', message: '', companyWebsite: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EDGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

export default function App() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const { name, email, phone, brokerage } = form;
    if (!name.trim() || !email.trim() || !phone.trim() || !brokerage.trim()) {
      setValidationError('Please fill in your name, email, phone, and brokerage.');
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError('');
    setStatus('submitting');

    try {
      // Also persist to Supabase for record-keeping
      supabase.from('contact_submissions').insert([{
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        brokerage: form.brokerage.trim(),
        property_address: form.property.trim(),
        message: form.message.trim(),
      }]).then(() => {});

      const res = await fetch(EDGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          brokerage: form.brokerage.trim(),
          property: form.property.trim(),
          message: form.message.trim(),
          companyWebsite: form.companyWebsite, // honeypot
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(emptyForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* ── HEADER ── */}
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="logo-link" href="#top" aria-label="Beyond the Listing home">
            <img src={LOGO} alt="Beyond the Listing" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#how-it-works">How It Works</a>
            <a href="#why-agents">Why Agents Love It</a>
            <a href="#episode-format">Episode Format</a>
            <a href="#contact">Contact</a>
            <a className="nav-button" href="#contact">Book a Call</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ── HERO ── */}
        <section className="hero section-dark">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A YouTube series for outstanding listings</p>
              <h1>Turn Your Listing Into a Show Worth Watching.</h1>
              <div className="gold-line" />
              <p className="hero-lead">
                Beyond the Listing is a hosted YouTube home-story show that helps agents and brokers
                showcase standout properties with high-end videography, cinematic storytelling, and
                strategic outreach.
              </p>
              <div className="button-row">
                <a className="btn btn-gold" href="#contact">Request Info</a>
                <a className="btn btn-dark" href="#episode-format">
                  <span className="play-dot">▶</span> See the Concept
                </a>
              </div>
              <div className="hero-points">
                <div className="hero-point">
                  <span>◷</span>
                  <p>5-Minute<br />YouTube Episodes</p>
                </div>
                <div className="hero-point">
                  <span>▣</span>
                  <p>Cinematic Storytelling<br />That Connects</p>
                </div>
                <div className="hero-point">
                  <span>◎</span>
                  <p>Designed for<br />Outreach &amp; SEO</p>
                </div>
              </div>
            </div>

            <article className="episode-card">
              <div className="episode-media">
                <img src={HERO_THUMB} alt="Episode preview — Inside a Timeless Estate in Virginia" />
              </div>
            </article>
          </div>
        </section>

        {/* ── HOST STRIP ── */}
        <section className="host-section section-dark">
          <div className="site-shell">
            <div className="host-card">
              <div className="host-image">
                <img src={HOST_PORTRAIT} alt="Malinda, host of Beyond the Listing" />
              </div>
              <div className="host-copy">
                <p className="eyebrow">Meet your host</p>
                <h2>Hosted by Malinda</h2>
                <p>
                  An advertising and real estate expert with a passion for helping agents elevate
                  exceptional properties through cinematic video and powerful outreach.
                </p>
              </div>
              <div className="host-credentials">
                <div>
                  <span>♙</span>
                  <p>Real Estate Expert &amp; Storyteller</p>
                </div>
                <div>
                  <span>▣</span>
                  <p>Cinematic Eye for Detail</p>
                </div>
                <div>
                  <span>♡</span>
                  <p>Your Partner in Showcasing Listings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THE SHOW IS ── */}
        <section className="show-section section-cream">
          <div className="site-shell show-grid">
            <div className="section-copy">
              <h2>About the Show</h2>
              <div className="gold-line" />
              <p>
                Beyond the Listing is a hosted YouTube series led by Malinda that tells the story
                behind exceptional properties and the communities they&rsquo;re in.
              </p>
              <p>
                Each episode blends local insight, cinematic visuals, and agent features to create a
                show worth watching—and sharing.
              </p>
            </div>
            <div className="show-video media-frame">
              <img src={`${CDN}/about-show-malinda-courtyard.png`} alt="Malinda hosting the show" />
              <button className="big-play light" type="button">▶</button>
            </div>
            <aside id="episode-format" className="format-card">
              <h3>Episode Format</h3>
              <ol>
                <li><span>1</span> Intro</li>
                <li><span>2</span> Stats / Region / County / Town context</li>
                <li><span>3</span> Cinematic tour + agent interview</li>
                <li><span>4</span> Interior walkthrough</li>
                <li><span>5</span> Lifestyle + area highlights</li>
                <li><span>6</span> Drone overview</li>
                <li><span>7</span> Agent preview</li>
                <li><span>8</span> Outro + contact</li>
              </ol>
            </aside>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section id="why-agents" className="benefits-section section-cream">
          <div className="site-shell">
            <h2 className="benefits-title">Why Agents and Brokers Use It</h2>
            <div className="benefit-grid">
              <article className="benefit-card">
                <div className="benefit-icon">☆</div>
                <h3>Win More Listings</h3>
                <p>Stand out with a presentation that positions you as the go-to expert.</p>
              </article>
              <article className="benefit-card">
                <div className="benefit-icon">♙</div>
                <h3>Impress Sellers</h3>
                <p>Give your sellers a premium, shareable experience they will remember.</p>
              </article>
              <article className="benefit-card">
                <div className="benefit-icon">▣</div>
                <h3>Turn One Show Into Weeks of Content</h3>
                <p>Get a full content package that fuels your outreach, social, and marketing.</p>
              </article>
              <article className="benefit-card">
                <div className="benefit-icon">⌁</div>
                <h3>Elevate Your Brand</h3>
                <p>Build credibility and authority with high-production video storytelling.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="deliverables-section section-dark">
          <div className="site-shell">
            <h2 className="section-title dark">What You Get</h2>
            <div className="deliverable-grid">
              <article className="deliverable">
                <h3>Full YouTube Episode</h3>
                <div className="deliverable-media wide">
                  <img src={`${CDN}/deliverable-full-episode-virginia.png`} alt="Full YouTube episode thumbnail" />
                </div>
              </article>
              <article className="deliverable">
                <h3>Social Clips &amp; Reels</h3>
                <div className="reel-grid">
                  <div className="deliverable-media phone">
                    <img src={`${CDN}/deliverable-reel-1-virginia.png`} alt="Social reel thumbnail one" />
                  </div>
                  <div className="deliverable-media phone">
                    <img src={`${CDN}/deliverable-reel-2-virginia.png`} alt="Social reel thumbnail two" />
                  </div>
                </div>
              </article>
              <article className="deliverable">
                <h3>Drone &amp; B-Roll Footage</h3>
                <div className="deliverable-media wide">
                  <img src={`${CDN}/deliverable-drone-broll-virginia.png`} alt="Drone footage thumbnail" />
                </div>
              </article>
              <article className="deliverable">
                <h3>Branded CTA &amp; Contact Assets</h3>
                <div className="deliverable-media cta">
                  <img src={`${CDN}/deliverable-branded-cta-virginia.png`} alt="Branded call-to-action asset" />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS + WHO IT'S FOR ── */}
        <section id="how-it-works" className="process-section section-cream">
          <div className="site-shell">
            <h2 className="section-title">How It Works</h2>
            <div className="process-grid">
              <div className="process-step">
                <span>1</span><i>▣</i>
                <p>We coordinate the property, schedule, and logistics.</p>
              </div>
              <div className="process-step">
                <span>2</span><i>▻</i>
                <p>We film a cinematic tour and interview with your agent.</p>
              </div>
              <div className="process-step">
                <span>3</span><i>◉</i>
                <p>We produce the episode and content package.</p>
              </div>
              <div className="process-step">
                <span>4</span><i>⇧</i>
                <p>You receive a final release and assets to share everywhere.</p>
              </div>
            </div>
            <h2 className="section-title audience-title">Who It&rsquo;s For</h2>
            <div className="audience-grid">
              <div><span>♙</span><p>Top Producing Agents</p></div>
              <div><span>⌂</span><p>Boutique Brokerages</p></div>
              <div><span>♢</span><p>Luxury &amp; Exclusive Homes</p></div>
              <div><span>♧</span><p>Teams &amp; Agent Marketing Programs</p></div>
            </div>
          </div>
        </section>

        {/* ── CONTACT / TESTIMONIAL ── */}
        <section id="contact" className="contact-section section-dark">
          <div className="site-shell contact-grid">
            <div className="testimonial">
              <p className="eyebrow">What agents are saying</p>
              <blockquote>
                &ldquo;This show has helped us win the listing, meet more ideal clients, and build a
                brand that truly stands out in a crowded market.&rdquo;
              </blockquote>
              <div className="agent-row">
                <span className="agent-avatar" />
                <p>
                  <strong>Michael Reynolds</strong><br />
                  <em>Top Producing Agent</em>
                </p>
              </div>
              <div className="button-row">
                <a className="btn btn-gold" href="#contact">Request More Info</a>
                <a className="btn btn-dark" href="#top">Book a Call</a>
              </div>
            </div>

            <div className="bottom-portrait">
              <img src={CONTACT_PORTRAIT} alt="Malinda — Beyond the Listing host" />
            </div>

            {status === 'success' ? (
              <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
                <p style={{ color: 'var(--gold-2)', fontSize: 18, fontWeight: 700, margin: 0 }}>Request Received!</p>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, margin: 0 }}>Thanks — we received your request and will be in touch soon.</p>
                <button className="btn btn-gold btn-full" onClick={() => setStatus('idle')}>Submit Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="companyWebsite"
                  value={form.companyWebsite}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="form-grid">
                  <input type="text" name="name" placeholder="Name *" value={form.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} />
                  <input type="tel" name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} />
                  <input type="text" name="brokerage" placeholder="Brokerage *" value={form.brokerage} onChange={handleChange} />
                  <input className="full" type="text" name="property" placeholder="Property Address (or Area)" value={form.property} onChange={handleChange} />
                  <textarea className="full" name="message" placeholder="Tell us about the property" value={form.message} onChange={handleChange} />
                </div>
                {validationError && (
                  <p style={{ color: '#e88b8b', fontSize: 13, textAlign: 'center', margin: '10px 0 0' }}>
                    {validationError}
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#e88b8b', fontSize: 13, textAlign: 'center', margin: '10px 0 0' }}>
                    Something went wrong sending your request. Please try again or email <strong>casting@beyondthelistingshow.com</strong> directly.
                  </p>
                )}
                <button className="btn btn-gold btn-full" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request More Info'}
                </button>
                <p className="privacy">&#9638; We respect your privacy. Your information will never be shared.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <img src={LOGO} alt="Beyond the Listing" />
          <p>A hosted home-story show for standout properties.</p>
          <nav>
            <a href="#how-it-works">How It Works</a>
            <a href="#why-agents">Why Agents Love It</a>
            <a href="#episode-format">Episode Format</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
