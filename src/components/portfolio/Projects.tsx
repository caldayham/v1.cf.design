import { getAllProjects } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className={styles.projects}>
      <h3 className={styles.projectsTitle}>Projects</h3>
      <p className={styles.scrollHint}>Scroll to explore our projects →</p>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.portfolioCard}>
              <div className={styles.portfolioImageWrapper}>
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className={styles.portfolioImage}
                />
                <span className={`${styles.statusBadge} ${project.status === 'in-progress' ? styles.statusInProgress : ''}`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <div className={styles.portfolioInfo}>
                <h3 className={styles.portfolioName}>{project.title}</h3>
                <p className={styles.portfolioLocation}>{project.location}</p>
                <div className={styles.scopeTags}>
                  {project.scope.slice(0, 3).map((item, i) => (
                    <span key={i} className={styles.scopeTag}>{item}</span>
                  ))}
                  {project.scope.length > 3 && (
                    <span className={styles.scopeTag}>+{project.scope.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
