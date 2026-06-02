import { CDN } from '../lib/cdn';
import styles from './Deliverables.module.css';

export default function Deliverables() {
  return (
    <section className={`section-dark ${styles.deliverables}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.headerLine} />
          <h2 className={`centered ${styles.sectionTitle}`}>What You Get</h2>
          <div className={styles.headerLine} />
        </div>

        <div className={styles.deliverableGrid}>
          {/* YouTube Episode */}
          <div className={styles.deliverableItem}>
            <h3>Full YouTube Episode</h3>
            <div className={styles.mediaCard}>
              <img src={CDN.youtubeThumbnail} alt="Full YouTube Episode thumbnail" />
            </div>
          </div>

          {/* Social Reels */}
          <div className={styles.deliverableItem}>
            <h3>Social Clips &amp; Reels</h3>
            <div className={styles.reelPair}>
              <img src={CDN.reelThumb1} alt="Social reel clip 1" />
              <img src={CDN.reelThumb2} alt="Social reel clip 2" />
            </div>
          </div>

          {/* Drone Footage */}
          <div className={styles.deliverableItem}>
            <h3>Drone &amp; B-Roll Footage</h3>
            <div className={styles.mediaCard}>
              <img src={CDN.droneThumbnail} alt="Drone and B-Roll footage" />
            </div>
          </div>

          {/* Branded CTA */}
          <div className={styles.deliverableItem}>
            <h3>Branded CTA &amp; Contact Assets</h3>
            <div className={styles.mediaCard}>
              <img src={CDN.brandedCta} alt="Branded CTA and contact assets" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
