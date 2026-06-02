import { CDN } from '../lib/cdn';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
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
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 1.5L10.5 6 2.5 10.5V1.5Z" fill="currentColor" />
                </svg>
              </span>
              See the Concept
            </a>
          </div>

          <ul className={styles.heroFeatures}>
            <li>
              <span className={styles.featureDot} />
              5-Minute YouTube Episodes
            </li>
            <li>
              <span className={styles.featureDot} />
              Cinematic Storytelling That Connects
            </li>
            <li>
              <span className={styles.featureDot} />
              Designed for Outreach &amp; SEO
            </li>
          </ul>
        </div>

        {/* Right: episode preview card */}
        <aside id="preview" className={`card-dark ${styles.episodeCard}`}>
          <div className={styles.thumbWrap}>
            <img
              src={CDN.episodePreview}
              alt="Episode preview — Inside a Timeless Estate in Scottsdale"
              className={styles.thumbImg}
            />
            <div className={styles.playOverlay}>
              <div className={styles.playBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a1a1a">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
            <span className={styles.runtime}>5:07</span>
            <span className={styles.previewBadge}>Episode Preview</span>
          </div>
          <div className={styles.cardMeta}>
            <h3>Inside a Timeless Estate in Scottsdale</h3>
            <p className={styles.cardSub}>
              Episode 2&nbsp;&bull;&nbsp;Scottsdale, Arizona
              <span className={styles.ytPill}>
                <svg height="10" viewBox="0 0 80 18" fill="none">
                  <rect width="80" height="18" rx="3" fill="#FF0000" />
                  <path d="M33 9L29 6.5v5L33 9z" fill="white" />
                  <text x="36" y="13" fontFamily="Arial,sans-serif" fontSize="8" fill="white" fontWeight="700">YouTube</text>
                </svg>
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
