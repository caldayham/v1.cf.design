'use client';

import { useState } from 'react';
import { PublicProject } from '@/types/project';
import styles from './FullPropertyCard.module.css';

interface FullPropertyCardProps {
  project: PublicProject;
}

export default function FullPropertyCard({ project }: FullPropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.featuredImage];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.gallery}>
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={styles.mainImage}
            />
            {images.length > 1 && (
              <>
                <button className={styles.navButton} style={{ left: '1rem' }} onClick={prevImage} aria-label="Previous image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className={styles.navButton} style={{ right: '1rem' }} onClick={nextImage} aria-label="Next image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className={styles.thumbnails}>
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${index === currentImageIndex ? styles.thumbnailActive : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.details}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.location}>{project.location}</p>

          <div className={styles.scope}>
            <h3 className={styles.sectionTitle}>Project Scope</h3>
            <div className={styles.scopeTags}>
              {project.scope.map((item, index) => (
                <span key={index} className={styles.scopeTag}>{item}</span>
              ))}
            </div>
          </div>

          {project.description && (
            <div className={styles.descriptionSection}>
              <h3 className={styles.sectionTitle}>About This Project</h3>
              <p className={styles.description}>{project.description}</p>
            </div>
          )}

          <div className={styles.highlights}>
            <h3 className={styles.sectionTitle}>Highlights</h3>
            <ul className={styles.highlightsList}>
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {project.hasTestimonial && project.testimonialQuote && (
            <div className={styles.testimonial}>
              <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21C3 17.134 4.79 14.5 8.5 13C7.5 11.5 7 10 7 8.5C7 6 8.5 4 11 3C9 6 9 8.5 10 10.5C11 12.5 13 13 14.5 13H15C15 16.866 13.21 19.5 9.5 21H3ZM14 21C14 17.134 15.79 14.5 19.5 13C18.5 11.5 18 10 18 8.5C18 6 19.5 4 22 3C20 6 20 8.5 21 10.5C22 12.5 24 13 25.5 13H26C26 16.866 24.21 19.5 20.5 21H14Z" fill="currentColor"/>
              </svg>
              <blockquote className={styles.quote}>
                {project.testimonialQuote}
              </blockquote>
              <p className={styles.author}>— Client Testimonial</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
