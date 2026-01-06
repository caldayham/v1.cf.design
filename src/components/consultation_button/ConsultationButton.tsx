'use client';

import { useState, useEffect } from 'react';
import styles from './ConsultationButton.module.css';

interface ConsultationButtonProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export default function ConsultationButton({ onVisibilityChange }: ConsultationButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5;
      const visible = window.scrollY > scrollThreshold;
      setIsVisible(visible);
      onVisibilityChange?.(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onVisibilityChange]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#contact"
      className={`${styles.button} ${isVisible ? styles.buttonVisible : ''}`}
      onClick={handleClick}
    >
      Consultation Inquiries
    </a>
  );
}
