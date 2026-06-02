import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />

      <div className={`container ${styles.heroGrid}`}>
        {/* Left: copy */}
        <div className={styles.heroCopy}>
          <span className="eyebrow">A YouTube Series for Outstanding Listings</span>
          <h1>Turn Your Listing Into a Show Worth&nbsp;Watching.</h1>
          <p className={styles.lead}>
            Beyond the Listing is a hosted YouTube home-story show that helps agents and brokers
            showcase standout properties with high-end videography, cinematic storytelling, and
            strategic outreach.
          </p>

          <div className="cta-row">
            <a href="#contact" className="btn btn-gold">Request Info</a>
            <a href="#preview" className="btn btn-outline">
              <span className={styles.playIcon}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 1.5L12 7 3 12.5V1.5Z" fill="currentColor" />
                </svg>
              </span>
              See the Concept
            </a>
          </div>

          <ul className={styles.heroFeatures}>
            <li>
              <span className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              5-Minute YouTube Episodes
            </li>
            <li>
              <span className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 10l4.553-2.527A1 1 0 0121 8.382v7.236a1 1 0 01-1.447.895L15 14M3 8h12v8H3z" />
                </svg>
              </span>
              Cinematic Storytelling That Connects
            </li>
            <li>
              <span className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              Designed for Outreach &amp; SEO
            </li>
          </ul>
        </div>

        {/* Right: episode preview card */}
        <aside id="preview" className={`card-dark ${styles.episodePreview}`}>
          <div className={styles.previewThumb}>
            <img src="/assets/episode-preview.png" alt="Episode preview — Inside a Timeless Estate in Scottsdale" />
            <div className={styles.playOverlay}>
              <div className={styles.playBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
            <span className={styles.runtime}>5:07</span>
            <span className={styles.previewBadge}>
              <span className="eyebrow" style={{ margin: 0, color: 'var(--gold-soft)' }}>Episode Preview</span>
            </span>
          </div>
          <div className={styles.previewMeta}>
            <h3>Inside a Timeless Estate in Scottsdale</h3>
            <p className={styles.previewSub}>
              Episode 2&nbsp;&bull;&nbsp;Scottsdale, Arizona
              <span className={styles.ytBadge}>
                <svg height="12" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="90" height="20" rx="4" fill="#FF0000"/>
                  <path d="M37.5 10L33 7.5v5L37.5 10z" fill="white"/>
                  <text x="41" y="14.5" fontFamily="Arial, sans-serif" fontSize="9" fill="white" fontWeight="bold">YouTube</text>
                </svg>
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
