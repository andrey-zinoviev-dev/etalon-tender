"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types/project";
import { TAP_THRESHOLD } from "./constants";
import ScrollSnapTrack, { type ScrollSnapTrackHandle } from "./ScrollSnapTrack";
import GalleryArrows from "./GalleryArrows";
import styles from "./ProjectGallery.module.css";

interface GalleryPreviewProps {
  images: string[];
  alt: string;
  status: Project["status"];
  activeIndex: number;
  hasMultiple: boolean;
  onPrev: () => void;
  onNext: () => void;
  onOpenModal: (index?: number) => void;
  onIndexChange: (index: number) => void;
  previewTrackRef: React.RefObject<ScrollSnapTrackHandle | null>;
}

export default function GalleryPreview({
  images,
  alt,
  status,
  activeIndex,
  hasMultiple,
  onPrev,
  onNext,
  onOpenModal,
  onIndexChange,
  previewTrackRef,
}: GalleryPreviewProps) {
  const slideTouchStart = useRef<{ x: number; y: number } | null>(null);
  const openedViaTouch = useRef(false);

  const onSlideTouchStart = (e: React.TouchEvent) => {
    slideTouchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const onSlideTouchEnd = (e: React.TouchEvent, index: number) => {
    if (!slideTouchStart.current) return;
    const deltaX = Math.abs(e.changedTouches[0].clientX - slideTouchStart.current.x);
    const deltaY = Math.abs(e.changedTouches[0].clientY - slideTouchStart.current.y);
    slideTouchStart.current = null;
    if (deltaX < TAP_THRESHOLD && deltaY < TAP_THRESHOLD) {
      openedViaTouch.current = true;
      onOpenModal(index);
    }
  };

  const onSlideClick = (index: number) => {
    if (openedViaTouch.current) {
      openedViaTouch.current = false;
      return;
    }
    onOpenModal(index);
  };

  return (
    <>
      <div className={styles.previewDesktop}>
        <div className={styles.previewStage}>
          <span className={styles.status}>{status}</span>
          {hasMultiple && <GalleryArrows onPrev={onPrev} onNext={onNext} />}
          <button
            type="button"
            className={styles.mainImageButton}
            onClick={() => onOpenModal()}
            aria-label={`Открыть галерею: ${alt}`}
          >
            <Image
              className={styles.mainImage}
              src={images[activeIndex]}
              alt={`${alt} — фото ${activeIndex + 1}`}
              width={870}
              height={500}
            />
          </button>
        </div>
      </div>

      <div className={styles.previewMobile}>
        <div className={styles.previewMobileWrap}>
          <span className={styles.status}>{status}</span>
          <ScrollSnapTrack
            ref={previewTrackRef}
            slideCount={images.length}
            activeIndex={activeIndex}
            onIndexChange={onIndexChange}
            ariaLabel={`Галерея: ${alt}`}
            trackClassName={styles.track}
            renderSlide={(i) => (
              <button
                key={images[i] + i}
                type="button"
                className={styles.slide}
                onClick={() => onSlideClick(i)}
                onTouchStart={onSlideTouchStart}
                onTouchEnd={(e) => onSlideTouchEnd(e, i)}
                aria-label={`Открыть галерею: ${alt}, фото ${i + 1}`}
              >
                <Image
                  className={styles.slideImage}
                  src={images[i]}
                  alt={`${alt} — фото ${i + 1}`}
                  width={870}
                  height={500}
                />
              </button>
            )}
          />
        </div>
      </div>
    </>
  );
}
