import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBackgroundImageWrapper}>
        <Image
          src="/imgs/general-site-imgs/blue-wash-landscape.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.heroBackgroundImage}
          priority
        />
      </div>
      <div className={styles.heroBackgroundLogoWrapper}>
        <Image
          src="/cf-text-logo.png"
          alt=""
          fill
          sizes="150vw"
          className={styles.heroBackgroundLogo}
          priority
        />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleWrapper}>
          <h1 className={styles.heroTitle}>Quality Landscape Design</h1>
          <p className={styles.heroSubtitle}>San Mateo & Santa Clara County</p>
        </div>
        <div className={styles.heroCtaWrapper}>
          <p className="text-body" style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
            Reimagining your outdoor space should be exciting, not stressful.
            For most homeowners, two hurdles stand between intent and reality: the right design, and the right contractor.
          </p>
        </div>
        <div className={styles.heroButtonsWrapper}>
          <div className={styles.heroPrimaryButtonWrapper}>
            <a href="#contact" className={`${styles.heroCta} ${styles.heroCtaPrimary}`}>
              On-Site Consultation Inquiries
            </a>
            <p className={styles.heroDisclaimer}>*Free within 30 minutes of Palo Alto</p>
          </div>
          <a href="#purpose" className={`${styles.heroCta} ${styles.heroCtaSecondary}`}>
            About the Brothers
          </a>
        </div>
      </div>
    </section>
  );
}
