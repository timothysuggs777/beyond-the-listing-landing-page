import { CDN } from '../lib/cdn';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <a href="#hero" className={styles.brand}>
          <img src={CDN.logo} alt="Beyond the Listing" />
        </a>
        <p className={styles.tagline}>A hosted home-story show for standout properties.</p>
        <nav className={styles.footerNav}>
          <a href="#how-it-works">How It Works</a>
          <a href="#benefits">Why Agents Love It</a>
          <a href="#episode-format">Episode Format</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Beyond the Listing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
