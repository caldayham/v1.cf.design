import styles from './Purpose.module.css';
import ImageCarousel from './ImageCarousel';

export default function PurposeSection() {
  // Collection of Cal & Fynn images
  const calFynnImages = [
    '/imgs/cal-fynn-construction/cal-fynn-robin-deck.JPG',
    '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-and-cal-after.png',
    '/imgs/cal-fynn-construction/cal-fynn-tina.jpg',
    '/imgs/general-site-imgs/cal-fynn-tina-pottingstation.JPG',
    '/imgs/cal-fynn-construction/cal-fynn-runnen-patio.jpg',
    '/imgs/cal-fynn-construction/cal-fynn-karen-gate.jpg',
    '/imgs/cal-fynn-construction/cal-fynn-garden-box.PNG',
    '/imgs/cal-fynn-construction/cal-fynn-amy-table.PNG',
    '/imgs/cal-fynn-construction/cal-peggy-fence.jpg',
    '/imgs/cal-fynn-construction/cal-garden-box.PNG',
    '/imgs/cal-fynn-construction/cal-tina-coffeetable.jpg',
    '/imgs/cal-fynn-construction/cal-tina-potingstation.png',
    '/imgs/cal-fynn-construction/cal-perry-littlelibrary.png',
    '/imgs/general-site-imgs/cal-perry-irrigationbox.JPG',
    '/imgs/cal-fynn-construction/fynn-karen-fence.jpg',
    '/imgs/cal-fynn-construction/fynn-gate-karen.jpg',
    '/imgs/cal-fynn-construction/fynn-table.PNG',
    '/imgs/cal-fynn-construction/fynn-tina-coffetable.JPEG',
    '/imgs/general-site-imgs/Fynn-workshop.jpg',
    '/imgs/general-site-imgs/fynn-digging-ruthellen.jpg',
  ];

  return (
    <section className={styles.about} id="purpose">
      <div className={styles.aboutContainer}>
        <h2 className="section-title">Our Purpose</h2>

        {/* Section 1: Mission Statement Card */}
        <div className={styles.missionStatement}>
          <p className="text-headline" style={{ fontSize: '1.75rem' }}>
            Create <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>amazing landscaping engagements</span> between homeowners and contractors.
          </p>
          <p className="text-body" style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)' }}>
            Projects go wrong because of misaligned expectations.
            <br/> Cal & Fynn uncover and translate your expectations to paper, then organize a contractor to properly execute.
          </p>
        </div>

        {/* Section 2: Heritage/Background Story */}
        <div className={styles.heritageSection}>
          <div className={styles.heritageImage}>
            <ImageCarousel
              images={calFynnImages}
              alt="Cal and Fynn working on projects"
            />
          </div>
          <div className={styles.heritageContent}>
            <p className="text-body">Creating useful construction plans has been the cornerstone of the Day-Ham brother's economic contribution; working as <a href="https://caldayham.com/blog/system-pavers-lessons.html" target="_blank" rel="noopener noreferrer">designers</a> for established contractors, designing <a href="https://www.linkedin.com/posts/caldayham_solidworks-research-anesthesia-activity-7185638047328137216-eG6c/" target="_blank" rel="noopener noreferrer">tools</a> to help with university research, and working for <a href="https://nextdoor.com/p/PRW2qpsfBCS5" target="_blank" rel="noopener noreferrer">neighbors</a> as carpenters and masons.</p>
          </div>
        </div>

        {/* Section 3: Core Principle Card */}
        <div className={styles.principleCard}>
          <p className="text-subtitle">
            At the core of any successful project is a <strong className="text-emphasis">thoughtful plan</strong> and a <strong className="text-emphasis">skilled & committed builder.</strong>
          </p>
          <p className="text-body" style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)' }}>Simple enough, nuanced in execution.</p>
        </div>
      </div>
    </section>
  );
}
