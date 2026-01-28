'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TabReturnModal.module.css';

export default function TabReturnModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLeftTab, setHasLeftTab] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setHasLeftTab(true);
      } else if (hasLeftTab) {
        // User returned to the tab
        setIsVisible(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasLeftTab]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    setIsVisible(false);
    // Scroll to the contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.imageWrapper}>
          <Image
            src="/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-backpatio-after.png"
            alt="Beautiful backyard patio transformation"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>We Know We&apos;re Young!</h2>
          <p className={styles.subtitle}>
            If your outdoor space is where you want it then feel free to close this tab, but if you live in the Bay Area and are feeling lost with how to best use your space, Fynn and Cal will personally drive out to your area and give you 90 minutes of outdoor upgrading gold free of charge with zero expectation to move forward with us.
          </p>
          <p className={styles.subtitle}>
            We keep our local consultations free because the more homeowners and situations we interact with, the better our services can be for the people who do choose to work with us.
          </p>
          <button className={styles.ctaButton} onClick={handleCTAClick}>
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
