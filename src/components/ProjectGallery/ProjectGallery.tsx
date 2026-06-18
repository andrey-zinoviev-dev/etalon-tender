"use client";

import { useCallback, useRef, useState } from "react";
import type { Project } from "@/types/project";
import { isMobileViewport } from "./constants";
import GalleryPreview from "./GalleryPreview";
import GalleryModal from "./GalleryModal";
import GalleryDots from "./GalleryDots";
import type { ScrollSnapTrackHandle } from "./ScrollSnapTrack";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
  status: Project["status"];
}

export default function ProjectGallery({ images, alt, status }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewTrackRef = useRef<ScrollSnapTrackHandle>(null);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const count = images.length;
  const hasMultiple = count > 1;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  const openModal = useCallback((index?: number) => {
    if (index !== undefined) setActiveIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    requestAnimationFrame(() => {
      if (isMobileViewport()) {
        previewTrackRef.current?.scrollToIndex(activeIndexRef.current, false);
      }
    });
  }, []);

  const selectIndex = useCallback((index: number) => {
    setActiveIndex(index);
    if (isMobileViewport()) {
      previewTrackRef.current?.scrollToIndex(index);
    }
  }, []);

  return (
    <div className={styles.gallery} role="group" aria-roledescription="carousel" aria-label={alt}>
      <GalleryPreview
        images={images}
        alt={alt}
        status={status}
        activeIndex={activeIndex}
        hasMultiple={hasMultiple}
        onPrev={goPrev}
        onNext={goNext}
        onOpenModal={openModal}
        onIndexChange={setActiveIndex}
        previewTrackRef={previewTrackRef}
      />

      {hasMultiple && (
        <GalleryDots count={count} activeIndex={activeIndex} onSelect={selectIndex} />
      )}

      <GalleryModal
        isOpen={isModalOpen}
        images={images}
        alt={alt}
        activeIndex={activeIndex}
        hasMultiple={hasMultiple}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}
