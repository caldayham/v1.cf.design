'use client';

import { useState, useCallback, useEffect } from 'react';
import styles from './Header.module.css';
import CTAButton from '@/components/cta_button/CTAButton';

interface NavLink {
  id?: string;
  href?: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'purpose', label: 'Purpose' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
];

interface HeaderProps {
  hideCtaButton?: boolean;
}

export default function Header({ hideCtaButton = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleCtaVisibilityChange = useCallback((visible: boolean) => {
    setShowCta(visible);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.filter(link => link.id).map(link => link.id!);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper portion of viewport
            threshold: 0
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.navLink} ${activeSection === link.id ? styles.navLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id!)}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
      </header>

      <CTAButton onVisibilityChange={handleCtaVisibilityChange} forceHide={hideCtaButton} />

      {/* Mobile hamburger button - fixed at bottom right */}
      <button
        className={`${styles.hamburgerButton} ${showCta ? styles.hamburgerButtonShifted : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <span className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.mobileNavLinkActive : ''}`}
                onClick={(e) => handleNavClick(e, link.id!)}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </>
  );
}
