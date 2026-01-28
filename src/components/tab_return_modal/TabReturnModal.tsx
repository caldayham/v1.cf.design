'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TabReturnModal.module.css';

export default function TabReturnModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem('cf_modal_dismissed');
    const formSubmitted = sessionStorage.getItem('cf_form_submitted');

    if (wasDismissed === 'true' || formSubmitted === 'true') {
      setHasShown(true);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('cf_modal_dismissed', 'true');
  };

  const handleCTAClick = () => {
    setIsVisible(false);
    sessionStorage.setItem('cf_modal_dismissed', 'true');
    // Scroll to the contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'CF Design',
      text: 'Check out CF Design for your next home project!',
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed, ignore
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
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
          <h2 className={styles.title}>Before You Go!</h2>
          <p className={styles.subtitle}>
            If you live in the Bay Area and are feeling lost with how to best use your space, Fynn and Cal will personally drive out to your home and walk you through what an outdoor renovation entails. 
            </p>
            <p className={styles.subtitle}>
            We help you generate preliminary layout options, give you detailed information on material and plant choices and their tradeoffs, and even <a href="https://poly.cam" target="_blank" rel="noopener noreferrer" className={styles.link}>scan your entire property in 3D</a> which you can hand off to other builders and / designers, free of charge with zero expectation to move forward with us.
          </p>
          <p className={styles.subtitle}>
            We keep our local consultations free because the more homeowners and situations we interact with, the better our services can be for the people who do choose to work with us.
            Plus we're fun to work with and good with design. 
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.ctaButton} onClick={handleCTAClick}>
              Schedule Free Consultation
            </button>
            <button className={styles.shareButton} onClick={handleShare}>
              Share with a Friend
            </button>
          </div>
          <p className={styles.sharePrompt}>Not personally in the market for an outdoor overhaul? Share us with a friend! </p>
        </div>
      </div>
    </div>
  );
}
