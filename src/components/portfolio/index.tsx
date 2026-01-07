import Reviews from './Reviews';
import Projects from './Projects';
import styles from './Projects.module.css';

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioContainer}>
        <h2 className="section-title">Our Work</h2>

        <Projects />
        <Reviews />
      </div>
    </section>
  );
}
