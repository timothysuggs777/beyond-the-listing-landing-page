import { CDN } from '../lib/cdn';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Property photo background with dark overlay */}
      <div className={styles.bg} style={{ backgroundImage: `url('${CDN.episodePreview}')` }} />

      <div className={`container ${styles.inner}`}>
        {/* Left: copy */}
        <div className={styles.copy}>
          <span className={styles.eyebrow}>A YouTube Series for Outstanding Listings</span>
          <h1>Turn Your Listing Into a Show Worth Watching.</h1>
          <p className={styles.lead}>
            Beyond the Listing is a honed YouTube home-story show that brings agents and brokers
            immense branded properties with &rsquo;cinematic videography, cinematic videos, and
            strategic storytelling.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className="btn btn-gold">Request Info</a>
            <a href="#preview" className={styles.conceptBtn}>
              <span className={styles.playCircle}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 1.5L8.5 5 2 8.5V1.5Z" fill="currentColor" />
                </svg>
              </span>
              See the Concept
            </a>
          </div>
          <div className={styles.chips}>
            <div className={styles.chip}>
              <span className={styles.chipIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span>5-Minute<br />YouTube Episodes</span>
            </div>
            <div className={styles.chip}>
              <span className={styles.chipIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="7" width="15" height="10" rx="1" />
                  <path d="M17 10l4-2v8l-4-2" />
                </svg>
              </span>
              <span>Cinematic Storytelling<br />That Connects</span>
            </div>
            <div className={styles.chip}>
              <span className={styles.chipIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <span>Designed for<br />Outreach &amp; SEO</span>
            </div>
          </div>
        </div>

        {/* Right: episode preview card */}
        <aside id="preview" className={styles.previewCard}>
          <div className={styles.previewBadge}>Episode Preview</div>
          <div className={styles.previewThumb}>
            <img src={CDN.episodePreview} alt="Inside a Timeless Estate in Scottsdale" />
            <div className={styles.playOverlay}>
              <div className={styles.playBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a1a1a">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
            <span className={styles.runtime}>5:07</span>
          </div>
          <div className={styles.previewMeta}>
            <p className={styles.previewTitle}>Inside a Timeless Estate in Scottsdale</p>
            <div className={styles.previewSub}>
              <span>Episode 2 &bull; Scottsdale, Arizona</span>
              <span className={styles.ytBadge}>
                <svg height="14" viewBox="0 0 72 16" fill="none">
                  <rect width="72" height="16" rx="3" fill="#FF0000" />
                  <path d="M27 8l-3.5-2v4L27 8z" fill="white" />
                  <text x="29" y="11.5" fontFamily="Arial,sans-serif" fontSize="7.5" fill="white" fontWeight="700">YouTube</text>
                </svg>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
