import styles from './ProcessAudience.module.css';

const processSteps = [
  {
    num: 1,
    text: 'We coordinate the property, schedule, and logistics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    num: 2,
    text: 'We film a cinematic tour and interview with your agent.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.527A1 1 0 0121 8.382v7.236a1 1 0 01-1.447.895L15 14M3 8h12v8H3z" />
      </svg>
    ),
  },
  {
    num: 3,
    text: 'We produce the episode and content package.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: 4,
    text: 'You have a show release and assets to share everywhere.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
      </svg>
    ),
  },
];

const audience = [
  {
    label: 'Top Producing\nAgents',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: 'Boutique\nBrokerages',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Luxury &\nExclusive Homes',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: 'Teams & Agent\nMarketing Programs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function ProcessAudience() {
  return (
    <section id="how-it-works" className={`section-light ${styles.section}`}>
      <div className="container">
        <div className={styles.twoCol}>
          {/* Left half: How It Works */}
          <div className={styles.howCol}>
            <div className={styles.colHeadingRow}>
              <div className={styles.rule} />
              <h2 className={styles.colHeading}>How It Works</h2>
              <div className={styles.rule} />
            </div>
            <div className={styles.stepsRow}>
              {processSteps.map((step) => (
                <div key={step.num} className={styles.step}>
                  <div className={styles.stepCircle}>{step.num}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className={styles.vertDivider} />

          {/* Right half: Who It's For */}
          <div className={styles.whoCol}>
            <h2 className={styles.whoHeading}>Who It&rsquo;s For</h2>
            <div className={styles.audienceGrid}>
              {audience.map((a) => (
                <div key={a.label} className={styles.audienceItem}>
                  <span className={styles.audienceIcon}>{a.icon}</span>
                  <span className={styles.audienceLabel}>
                    {a.label.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
