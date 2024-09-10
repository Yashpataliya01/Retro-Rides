import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3>PRE-OWNED</h3>
          <h3>FIND A DEALER</h3>
          <h3>CAREERS</h3>
        </div>
        <div className={styles.section}>
          <h3>COOKIES</h3>
          <h3>EU TYRE LABELS</h3>
          <h3>SITE MAP</h3>
        </div>
        <div className={styles.section}>
          <h3>PRESSCLUB</h3>
          <h3>BATTERY REGULATION</h3>
          <h3>WHISPERS</h3>
        </div>
        <div className={styles.section}>
          <h3>LEGAL</h3>
          <h3>CONTACT</h3>
          <h3>LANGUAGE</h3>
        </div>
        <div className={styles.section}>
          <h3>COMPLAINTS</h3>
          <h3>PRIVACY</h3>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <p>Retro Rides MOTOR CARS</p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href="#">YouTube</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">X (Twitter)</a>
      </div>
    </footer>
  );
};

export default Footer;
