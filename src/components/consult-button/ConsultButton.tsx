'use client';

import React, { useState, useEffect } from 'react';
import styles from './ConsultButton.module.css';

export default function ConsultButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300; // Show after scrolling 300px
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={`${styles.consultButton} ${showButton ? styles.visible : ''}`}
    >
      Book a Consultation
    </a>
  );
}
