// src/components/footer/Footer.jsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className= "footer-color">
            © {currentYear} All Rights Reserved
          </div>
          <nav className={styles.nav}>
            <Link href="#about" className={styles.link}>About</Link>
            <span className={styles.divider}>|</span>
            <Link href="#portfolio" className={styles.link}>Portfolio</Link>
            <span className={styles.divider}>|</span>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;