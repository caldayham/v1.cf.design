'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  aspectRatio?: number; // width / height (e.g., 1.333 for 4:3, 0.75 for 3:4)
  beforeImagePosition?: string; // CSS object-position value
  afterImagePosition?: string; // CSS object-position value
  flipBeforeImage?: boolean; // Flip before image horizontally
  flipAfterImage?: boolean; // Flip after image horizontally
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt, beforeImagePosition, afterImagePosition, flipBeforeImage, flipAfterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* After image (right side) */}
      <div className={styles.imageWrapper}>
        <img
          src={afterImage}
          alt={`${alt} - After`}
          className={styles.image}
          draggable={false}
          style={{
            ...(afterImagePosition ? { objectPosition: afterImagePosition } : {}),
            ...(flipAfterImage ? { transform: 'scaleX(-1)' } : {}),
          }}
        />
      </div>

      {/* Before image (left side, clipped) */}
      <div className={styles.imageWrapper} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className={styles.image}
          draggable={false}
          style={{
            ...(beforeImagePosition ? { objectPosition: beforeImagePosition } : {}),
            ...(flipBeforeImage ? { transform: 'scaleX(-1)' } : {}),
          }}
        />
      </div>

      {/* Slider line and handle */}
      <div className={styles.slider} style={{ left: `${sliderPosition}%` }}>
        <div className={styles.sliderLine} />
        <div
          className={styles.sliderHandle}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className={styles.label} style={{ left: '1rem' }}>Before</div>
      <div className={styles.label} style={{ right: '1rem' }}>After</div>
    </div>
  );
}
