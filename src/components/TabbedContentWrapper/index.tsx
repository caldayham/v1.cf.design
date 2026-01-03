'use client';

import React from 'react';
import FloatingTabs from './FloatingTabs';
import styles from './TabbedContentWrapper.module.css';

export default function TabbedContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Main content - scrolls naturally with window */}
      <main className={styles.mainContent}>
        {children}
      </main>

      {/* White mask outside the frame - prevents content bleed */}
      <div className={styles.frameMask} />
      <div className={styles.frameMaskLeft} />
      <div className={styles.frameMaskRight} />

      {/* Visual frame border - fixed overlay, pointer-events: none */}
      <div className={styles.frameBorder} />

      {/* Floating tabs at bottom */}
      <FloatingTabs />
    </>
  );
}
