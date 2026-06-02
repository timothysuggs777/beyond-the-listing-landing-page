import { CDN } from '../lib/cdn';
import styles from './HostStrip.module.css';

export default function HostStrip() {
  return (
    <section className={styles.hostStrip}>
      <div className="container">
        <div className={styles.card}>
          {/* Portrait */}
          <div className={styles.portraitWrap}>
            <img
              src={CDN.malindaCutout}
              alt="Malinda — Host of Beyond the Listing"
              className={styles.portrait}
            />
          </div>

          {/* Copy */}
          <div className={styles.copy}>
            <span className="eyebrow">Meet Your Host</span>
            <h2>Hosted by Malinda</h2>
            <p>
              An advertising and real estate expert with a passion for helping agents elevate
              exceptional properties through cinematic video and powerful outreach.
            </p>
          </div>

          {/* Credentials */}
          <div className={styles.credentials}>
            <div className={styles.cred}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span>Real Estate Expert &amp; Storyteller</span>
            </div>
            <div className={styles.cred}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.5">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span>Cinematic Eye for Detail</span>
            </div>
            <div className={styles.cred}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>Your Partner in Showcasing Listings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
