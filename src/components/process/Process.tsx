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
                src="/imgs/cal-fynn-construction/cal-fynn-tina.jpg"
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
                <li>Solutions that fit your space while balancing function and aesthetics</li>
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
                src="/imgs/general-site-imgs/cal-fynn-outdoor-design.jpg"
                alt="Design and planning"
              />
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>02</span>
                <h3 className={styles.processTitle}>Design</h3>
              </div>
              <p className={styles.processDescription}>
              If you choose to move forward with our help beyond the consultation, we collaborate closely through focused review and revision meetings to construct and refine the details—until the design feels right for you, your home, and the way the space will be lived in.
              </p>
              <ul className={styles.processList}>
                <li><strong>2D Concepts:</strong> Two unique designs tailored to your space and preferences</li>
                <li><strong>3D Visualizations:</strong> Realistic renderings so you can get a feel for the final result before construction starts</li>
                <li><strong>Material Selection:</strong> Filtering hundreds of material options through your preferences and requirements, organizing stoneyard and nursery visits.</li>
                <li><strong>Construction Documents:</strong> Detailed plans ready to hand off to your contractor, not only "what goes where" but also specifics on grading, drainage, and any product installation instructions we don't want contractors guessing on.</li>

              </ul>
              <br/>
              <p className={styles.processDescription}>
                We want to leave this phase with a design that contractors know they can execute with minimal risk, so they don't price that risk into your quote. 
              </p>
            </div>
          </div>

          {/* Step 3: Bid - Image Left */}
          <div
            ref={(el) => { stepRefs.current[2] = el; }}
            className={styles.processStep}>
            <div className={styles.processImage}>
              <img
                src="/imgs/general-site-imgs/Day-ham-family.jpg"
                alt="Contractor bidding process"
              />
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>03</span>
                <h3 className={styles.processTitle}>Bid</h3>
              </div>
              <p className={styles.processDescription}>
                Finding the right contractor shouldn&apos;t be a gamble. We help you navigate the bidding process with confidence:
              </p>
              <ul className={styles.processList}>
                <li>Develop a list of compatible, licensed contractors in your area with proven track records</li>
                <li>Draft an Invitation to Bid (ITB) that resonates with quality contractors</li>
                <li>Negotiate terms for best alignment such as progress payment schedules and fair warranty terms</li>
                <li>Review all bids and provide our recommendation </li>
              </ul>
            </div>
          </div>

          {/* Step 4: Build - Image Right */}
          <div
            ref={(el) => { stepRefs.current[3] = el; }}
            className={`${styles.processStep} ${styles.processStepReverse}`}>
            <div className={styles.processImage}>
              <img
                src="/imgs/general-site-imgs/ignite-in-progress.jpg"
                alt="Project management"
              />
              <span className={styles.imageCaption}>Drone shot of our Lake Street project during installation</span>
            </div>
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>04</span>
                <h3 className={styles.processTitle}>Build</h3>
              </div>
              <p className={styles.processDescription}>
                Once contracts are signed, we stay involved to ensure your vision becomes reality:
              </p>
              <ul className={styles.processList}>
                <li>Monitor construction progress against your approved plans</li>
                <li>Address questions and challenges that arise during installation </li>
                <li>Advocate on your behalf if issues need resolution</li>
                <li>Stay involved until your project is complete—final payment is only due after full installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gray background for philosophy callout */}
      <section className={styles.philosophySection}>
        <div className={styles.processContainer}>
          <div
            ref={(el) => { stepRefs.current[4] = el; }}
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
                We care deeply about every project we take on, and our hands-on experience in design and contractor management makes a <a href="#contact" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>free consultation</a> genuinely valuable for anyone looking to transform their space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
