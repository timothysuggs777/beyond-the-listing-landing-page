import { useState, useEffect } from 'react';
import { CDN } from '../lib/cdn';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navRow}`}>
        <a href="#hero" className={styles.brand}>
          <img src={CDN.logo} alt="Beyond the Listing" />
        </a>

        <nav className={`${styles.topNav} ${menuOpen ? styles.open : ''}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>Why Agents Love It</a>
          <a href="#episode-format" onClick={() => setMenuOpen(false)}>Episode Format</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn btn-gold" onClick={() => setMenuOpen(false)}>Book a Call</a>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.bar1Open : styles.bar1} />
          <span className={menuOpen ? styles.bar2Open : styles.bar2} />
          <span className={menuOpen ? styles.bar3Open : styles.bar3} />
        </button>
      </div>
    </header>
  );
}
