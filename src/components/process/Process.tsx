'use client';

import { useEffect, useRef } from 'react';
import styles from './Process.module.css';

export default function Process() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((step) => {
      if (!step) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.processStepVisible);
            }
          });
        },
        { threshold: 0.05 }
      );

      observer.observe(step);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && stepRefs.current[index]) {
          observer.unobserve(stepRefs.current[index]!);
        }
      });
    };
  }, []);
return (
    <>
      {/* White background for process steps */}
      <section className={styles.process} id="process">
        <div className={styles.processContainer}>
          <h2 className="section-title">Our Process</h2>

          {/* Step 1: Consultation - Image Left */}
          <div
            ref={(el) => { stepRefs.current[0] = el; }}
            className={styles.processStep}>
            <div className={styles.processImage}>
              <img
                src="/imgs/general-site-imgs/cal-perry-irrigationbox.JPG"
                alt="Initial consultation"
              />
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>01</span>
                <h3 className={styles.processTitle}>Consultation</h3>
              </div>
              <p className={styles.processDescription}>
                We visit your property <b>in person</b> to understand your vision and assess your space. You&apos;ll receive:
              </p>
              <ul className={styles.processList}>
                <li>Honest, unbiased advice on achieving your outdoor goals</li>
                <li>Material recommendations with cost estimates and trade-offs</li>
                <li>Guidance on hiring contractors and maximizing your budget</li>
                <li>Solutions that balance function and aesthetics</li>
                <li>A complete 3D site scan for future design work</li>
              </ul>
            </div>
          </div>

          {/* Step 2: Design - Image Right */}
          <div
            ref={(el) => { stepRefs.current[1] = el; }}
            className={`${styles.processStep} ${styles.processStepReverse}`}>
            <div className={styles.processImage}>
              <img
                src="/imgs/general-site-imgs/Fynn-workshop.jpg"
                alt="Design and planning"
              />
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>02</span>
                <h3 className={styles.processTitle}>Design</h3>
              </div>
              <p className={styles.processDescription}>

              </p>
              <ul className={styles.processList}>
                <li><strong>2D Concepts:</strong> Two unique designs tailored to your space and preferences</li>
                <li><strong>3D Visualizations:</strong> Realistic renderings so you can see the final result</li>
                <li><strong>Construction Documents:</strong> Detailed plans ready to hand off to any contractor</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Build - Image Left */}
          <div
            ref={(el) => { stepRefs.current[2] = el; }}
            className={styles.processStep}>
            <div className={styles.processImage}>
              <img
                src="/imgs/general-site-imgs/fynn-digging-ruthellen.jpg"
                alt="Project management"
              />
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>03</span>
                <h3 className={styles.processTitle}>Build</h3>
              </div>
              <p className={styles.processDescription}>
                Navigating contractors shouldn&apos;t be overwhelming. We leverage our network of trusted craftsmen to:
              </p>
              <ul className={styles.processList}>
                <li>Solicit bids from vetted specialists who take pride in their work</li>
                <li>Filter proposals and identify the right fit for your project</li>
                <li>Negotiate contract terms and payment schedules that protect you</li>
                <li>Stay involved throughout construction until your installation is complete</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gray background for philosophy callout */}
      <section className={styles.philosophySection}>
        <div className={styles.processContainer}>
          <div
            ref={(el) => { stepRefs.current[3] = el; }}
            className={styles.philosophyCallout}>
            <div className={styles.philosophyImage}>
              <img
                src="/imgs/cal-fynn-construction/cal-fynn-robin-deck.JPG"
                alt="Cal and Fynn on a completed deck project"
              />
            </div>
            <div className={styles.philosophyContent}>
              <h4 className={styles.philosophyHeadline}>No pressure. Just expertise.</h4>
              <p className={styles.philosophyText}>
                We care deeply about every project we take on, and our hands-on experience in design and contractor management makes a free consultation genuinely valuable for anyone looking to transform their space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
