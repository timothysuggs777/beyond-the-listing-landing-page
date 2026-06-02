import { CDN } from '../lib/cdn';
import styles from './Deliverables.module.css';

export default function Deliverables() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingRow}>
          <div className={styles.rule} />
          <h2 className={styles.heading}>What You Get</h2>
          <div className={styles.rule} />
        </div>

        <div className={styles.grid}>
          {/* 1: YouTube Episode — landscape with overlaid caption */}
          <div className={styles.item}>
            <p className={styles.label}>Full YouTube Episode</p>
            <div className={styles.ytCard}>
              <img src={CDN.youtubeThumbnail} alt="Full YouTube episode" />
              <div className={styles.ytOverlay}>
                <span className={styles.ytTitle}>Inside a Timeless Estate<br />in Scottsdale</span>
                <div className={styles.ytBar}>
                  <span className={styles.ytDot} />
                  <div className={styles.ytProgress} />
                  <span className={styles.ytTime}>5:07</span>
                  <span className={styles.ytIcons}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2: Social Reels — two portrait cards */}
          <div className={styles.item}>
            <p className={styles.label}>Social Clips &amp; Reels</p>
            <div className={styles.reelPair}>
              <div className={styles.reelCard}>
                <img src={CDN.reelThumb1} alt="Social reel 1" />
                <div className={styles.reelOverlay}>
                  <span>Inside This<br />Stunning Cal...</span>
                </div>
              </div>
              <div className={styles.reelCard}>
                <img src={CDN.reelThumb2} alt="Social reel 2" />
                <div className={styles.reelOverlay}>
                  <span>Inside This<br />Dream Home</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3: Drone footage */}
          <div className={styles.item}>
            <p className={styles.label}>Drone &amp; B-Roll Footage</p>
            <div className={styles.droneCard}>
              <img src={CDN.droneThumbnail} alt="Drone and B-Roll footage" />
              <div className={styles.droneBadge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 2l3 6H9l3-6zM9 8v6M15 8v6M6 14l3 4M18 14l-3 4M3 18h18" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4: Branded CTA — text-based card */}
          <div className={styles.item}>
            <p className={styles.label}>Branded CTA &amp; Contact Assets</p>
            <div className={styles.ctaCard}>
              <img src={CDN.brandedCta} alt="Branded CTA and contact assets" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
