import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.heading}>E-bazary</h3>
            <p>Explore the finest selection of luxury cars.</p>
          </div>
          <div className={`${styles.column} ${styles.quickLinks}`}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link href="/home">Home</Link></li>
              <li className={styles.listItem}><Link href="/about">About Us</Link></li>
              <li className={styles.listItem}><Link href="/top_car">Top car</Link></li>
              <li className={styles.listItem}><Link href="/team">Team</Link></li>
              <li className={styles.listItem}><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact Us</h3>
            <p>E-Bazary, Ivandry Antananarivo</p>
            <p>Email: ebazary@gmail.com</p>
            <p>Phone: (+261) 032 00 000 00 </p>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p>&copy; {new Date().getFullYear()} E-bazary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
