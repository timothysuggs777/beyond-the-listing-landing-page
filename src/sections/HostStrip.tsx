import styles from './HostStrip.module.css';

export default function HostStrip() {
  return (
    <section className={`section-dark ${styles.hostStrip}`}>
      <div className={`container ${styles.stripCard}`}>
        <img
          src="/assets/malinda-host-cutout.png"
          alt="Malinda — Host of Beyond the Listing"
          className={styles.hostCutout}
        />

        <div className={styles.hostCopy}>
          <span className="eyebrow">Meet Your Host</span>
          <h2>Hosted by Malinda</h2>
          <p>
            An advertising and real estate expert with a passion for helping agents elevate
            exceptional properties through cinematic video and powerful outreach.
          </p>
        </div>

        <div className={styles.hostPoints}>
          <div className={styles.iconPoint}>
            <span className={styles.pointIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </span>
            <span>Real Estate Expert &amp; Storyteller</span>
          </div>
          <div className={styles.iconPoint}>
            <span className={styles.pointIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
            <span>Cinematic Eye for Detail</span>
          </div>
          <div className={styles.iconPoint}>
            <span className={styles.pointIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
              </svg>
            </span>
            <span>Your Partner in Showcasing Listings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
