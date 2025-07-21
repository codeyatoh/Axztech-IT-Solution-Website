import React from 'react';
import styles from './ServiceSection.module.css';

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>
        We provide comprehensive IT solutions to help your business thrive in the digital age.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconBlue}>
            {/* Database/server icon (placeholder) */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EEF2FF"/><rect x="10" y="12" width="12" height="2" rx="1" fill="#3730A3"/><rect x="10" y="16" width="12" height="2" rx="1" fill="#3730A3"/><rect x="10" y="20" width="12" height="2" rx="1" fill="#3730A3"/></svg>
          </div>
          <h3>Solutions System Portal</h3>
          <p>Our flagship SSP product provides a comprehensive system portal that integrates and streamlines your business operations.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconRed}>
            {/* Mobile icon (placeholder) */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#FFF1F2"/><rect x="14" y="10" width="4" height="12" rx="2" fill="#FB7185"/><rect x="15" y="22" width="2" height="2" rx="1" fill="#FB7185"/></svg>
          </div>
          <h3>Custom Mobile</h3>
          <p>Tailored mobile app solutions designed to meet your specific business or community needs perfect for service efficiency, real-time tracking, and user engagement.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconPurple}>
            {/* Code icon (placeholder) */}
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EEF2FF"/><path d="M13 20l-2-2 2-2M19 12l2 2-2 2" stroke="#3730A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3>Custom Software</h3>
          <p>Tailored software solutions designed to meet your specific business requirements and challenges.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection; 