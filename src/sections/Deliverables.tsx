import { CDN } from '../lib/cdn';
import styles from './Deliverables.module.css';

export default function Deliverables() {
  return (
    <section className={styles.deliverables}>
      <div className="container">
        <div className={styles.heading}>
          <h2>What You Get</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.item}>
            <h3>Full YouTube Episode</h3>
            <div className={styles.mediaCard}>
              <img src={CDN.youtubeThumbnail} alt="Full YouTube episode thumbnail" />
            </div>
          </div>

          <div className={styles.item}>
            <h3>Social Clips &amp; Reels</h3>
            <div className={styles.reelCard}>
              <img src={CDN.reelThumb1} alt="Social reel clip 1" />
              <img src={CDN.reelThumb2} alt="Social reel clip 2" />
            </div>
          </div>

          <div className={styles.item}>
            <h3>Drone &amp; B-Roll Footage</h3>
            <div className={styles.mediaCard}>
              <img src={CDN.droneThumbnail} alt="Drone and B-Roll footage" />
            </div>
          </div>

          <div className={styles.item}>
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
