import styles from './ShowOverview.module.css';

export default function ShowOverview() {
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

  return (
    <section className={`section-light ${styles.showOverview}`}>
      <div className={`container ${styles.overviewGrid}`}>
        {/* Col 1: copy */}
        <div className={styles.overviewCopy}>
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
            <img src="/assets/show-explainer-video.png" alt="Malinda hosting the show" />
            <div className={styles.videoPlayOverlay}>
              <div className={styles.videoPlayBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a1a1a">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Episode Format card */}
        <div id="episode-format" className={`card-dark ${styles.formatCard}`}>
          <h3>Episode Format</h3>
          <ol className={styles.formatList}>
            {formatSteps.map((step, i) => (
              <li key={i}>
                <span className={styles.stepNum}>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
