import styles from './Benefits.module.css';

const benefits = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Win More Listings',
    body: 'Stand out with a presentation that positions you as the go-to expert.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Impress Sellers',
    body: 'Give your sellers a premium, shareable experience they will remember.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 9l2 2 4-4" />
      </svg>
    ),
    title: 'Turn One Show Into Weeks of Content',
    body: 'Get a full content package that fuels your outreach, social, and marketing.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Elevate Your Brand',
    body: 'Build credibility and authority with high-production video storytelling.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className={`section-light ${styles.benefits}`}>
      <div className="container">
        <div className={styles.headingRow}>
          <div className={styles.rule} />
          <h2 className={styles.heading}>Why Agents and Brokers Use It</h2>
          <div className={styles.rule} />
        </div>
        <div className={styles.grid}>
          {benefits.map((b) => (
            <div key={b.title} className={styles.card}>
              <span className={styles.icon}>{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
