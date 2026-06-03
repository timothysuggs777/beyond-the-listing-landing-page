import styles from './HostStrip.module.css';

export default function HostStrip() {
  return (
    <section className={styles.hostStrip}>
      <div className="container">
        <div className={styles.card}>
          {/* Portrait — headshot crop via CSS background-image */}
          <div
            className={styles.hostCardHeadshot}
            role="img"
            aria-label="Malinda — Host of Beyond the Listing"
          />

          {/* Middle copy */}
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Meet Your Host</span>
            <h2>Hosted by Malinda</h2>
            <p>
              An advertising and estate and local real estate expert with a passion for helping
              agents elevate exceptional properties through cinematic video and powerful outreach.
            </p>
          </div>

          {/* Right credentials — icon on top, label below, 3 columns */}
          <div className={styles.credentials}>
            <div className={styles.cred}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Real Estate Expert<br />&amp; Storyteller</span>
            </div>
            <div className={styles.cred}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span>Cinematic Eye for<br />Detail</span>
            </div>
            <div className={styles.cred}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>Your Partner in<br />Showcasing Listings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
