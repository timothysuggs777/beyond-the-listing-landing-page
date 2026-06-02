import { CDN } from '../lib/cdn';
import styles from './ShowOverview.module.css';

const formatSteps = [
  'Intro',
  'Stats / Region / County / Town context',
  'Cinematic tour + agent interview',
  'Interior walkthrough',
  'Lifestyle + area highlights',
  'Drone overview',
  'Agent preview',
  'Outro + contact',
];

export default function ShowOverview() {
  return (
    <section className={`section-light ${styles.showOverview}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Col 1: copy */}
          <div className={styles.copy}>
            <h2 className="heading-underline">What the Show Is</h2>
            <p>
              Beyond the Listing is a hosted YouTube series led by Malinda that tells the story
              behind exceptional properties and the communities they&rsquo;re in.
            </p>
            <p>
              Each episode blends local insight, cinematic visuals, and agent features to create a
              show worth watching—and sharing.
            </p>
          </div>

          {/* Col 2: video card */}
          <div className={styles.videoCard}>
            <div className={styles.videoThumb}>
              <img src={CDN.showExplainer} alt="Beyond the Listing show overview" />
              <div className={styles.videoOverlay}>
                <button className={styles.videoPlayBtn} aria-label="Play video">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a1a1a">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Col 3: Episode Format */}
          <div id="episode-format" className={`card-dark ${styles.formatCard}`}>
            <h3>Episode Format</h3>
            <ol className={styles.formatList}>
              {formatSteps.map((step, i) => (
                <li key={i} className={styles.formatItem}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
