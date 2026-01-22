'use client';

import { useState } from 'react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className={styles.carouselImage}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`${styles.carouselButton} ${styles.prevButton}`}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              className={`${styles.carouselButton} ${styles.nextButton}`}
              aria-label="Next image"
            >
              ›
            </button>

            <div className={styles.indicators}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.indicatorActive : ''
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
