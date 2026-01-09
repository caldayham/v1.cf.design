import { getAllProjects } from '@/data/projects';
import FullPropertyCard from './FullPropertyCard';
import PartialProjectCard from './PartialProjectCard';
import Reviews from './Reviews';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const projects = getAllProjects();
  const fullPropertyProjects = projects.filter(p => p.projectType === 'full-property');
  const partialProjects = projects.filter(p => p.projectType === 'partial');

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioContainer}>
        <h2 className="section-title">Our Work</h2>

        {/* Full Property Projects */}
        {fullPropertyProjects.length > 0 && (
          <div className={styles.fullPropertySection}>
            <h3 className={styles.subsectionTitle}>Full Property Transformations</h3>
            {fullPropertyProjects.map(project => (
              <FullPropertyCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {/* Partial Projects */}
        {partialProjects.length > 0 && (
          <div className={styles.partialProjectsSection}>
            <h3 className={styles.subsectionTitle}>Recent Projects</h3>
            <div className={styles.partialGrid}>
              {partialProjects.map(project => (
                <PartialProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}

        <Reviews />
      </div>
    </section>
  );
}
