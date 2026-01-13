import { PublicProject } from '@/types/project';
import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './PartialProjectCard.module.css';

interface PartialProjectCardProps {
  project: PublicProject;
}

export default function PartialProjectCard({ project }: PartialProjectCardProps) {
  if (!project.beforeImage || !project.afterImage) {
    return null;
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <BeforeAfterSlider
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        alt={project.title}
        beforeImagePosition={project.beforeImagePosition}
        afterImagePosition={project.afterImagePosition}
        flipBeforeImage={project.flipBeforeImage}
        flipAfterImage={project.flipAfterImage}
      />
      <p className={styles.description}>
        {project.description || project.highlights.join(' • ')}
      </p>
      <p className={styles.location}>{project.location}</p>
    </div>
  );
}
