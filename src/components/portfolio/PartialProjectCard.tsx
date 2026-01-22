'use client';

import { useState } from 'react';
import { PublicProject } from '@/types/project';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProjectModal from './ProjectModal';
import styles from './PartialProjectCard.module.css';

interface PartialProjectCardProps {
  project: PublicProject;
}

export default function PartialProjectCard({ project }: PartialProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project.beforeImage || !project.afterImage) {
    return null;
  }

  return (
    <>
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
        <div className={styles.footer}>
          <p className={styles.location}>{project.location}</p>
          <button className={styles.detailsButton} onClick={() => setIsModalOpen(true)}>
            Details
          </button>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
