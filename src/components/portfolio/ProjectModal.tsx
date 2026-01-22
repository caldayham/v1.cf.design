'use client';

import { PublicProject } from '@/types/project';
import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: PublicProject;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.location}>{project.location}</p>

          {project.beforeImage && project.afterImage && (
            <div className={styles.sliderWrapper}>
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                alt={project.title}
                beforeImagePosition={project.beforeImagePosition}
                afterImagePosition={project.afterImagePosition}
                flipBeforeImage={project.flipBeforeImage}
                flipAfterImage={project.flipAfterImage}
              />
            </div>
          )}

          <div className={styles.details}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Scope</h3>
              <ul className={styles.list}>
                {project.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Highlights</h3>
              <ul className={styles.list}>
                {project.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {project.description && (
              <div className={styles.section}>
                <p className={styles.description}>{project.description}</p>
              </div>
            )}
          </div>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
