"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { isMobileViewport } from "./constants";
import ScrollSnapTrack, { type ScrollSnapTrackHandle } from "./ScrollSnapTrack";
import GalleryArrows from "./GalleryArrows";
import styles from "./ProjectGallery.module.css";

interface GalleryModalProps {
  isOpen: boolean;
  images: string[];
  alt: string;
  activeIndex: number;
  hasMultiple: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}

export default function GalleryModal({
  isOpen,
  images,
  alt,
  activeIndex,
  hasMultiple,
  onClose,
  onPrev,
  onNext,
  onIndexChange,
}: GalleryModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const modalTrackRef = useRef<ScrollSnapTrackHandle>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowLeft") onPrev();
      if (hasMultiple && e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext, hasMultiple]);

  useEffect(() => {
    if (!isOpen) return;

    const frame = requestAnimationFrame(() => {
      if (isMobileViewport()) {
        modalTrackRef.current?.scrollToIndex(activeIndex, false);
      }
    });

    return () => cancelAnimationFrame(frame);
    // scroll modal track only when modal opens
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    thumbRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, isOpen]);

  const selectModalIndex = useCallback(
    (index: number) => {
      onIndexChange(index);
      if (isMobileViewport()) {
        modalTrackRef.current?.scrollToIndex(index);
      }
    },
    [onIndexChange],
  );

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Галерея: ${alt}`}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
        ×
      </button>

      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalImageDesktop}>
          <div className={styles.imageStage}>
            {hasMultiple && <GalleryArrows onPrev={onPrev} onNext={onNext} />}
            <Image
              className={styles.modalImage}
              src={images[activeIndex]}
              alt={`${alt} — фото ${activeIndex + 1}`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        <div className={styles.modalImageMobile}>
          <ScrollSnapTrack
            ref={modalTrackRef}
            slideCount={images.length}
            activeIndex={activeIndex}
            onIndexChange={onIndexChange}
            ariaLabel={`Галерея: ${alt}`}
            trackClassName={styles.modalTrack}
            renderSlide={(i) => (
              <div key={images[i] + i} className={styles.modalSlide}>
                <Image
                  className={styles.modalSlideImage}
                  src={images[i]}
                  alt={`${alt} — фото ${i + 1}`}
                  fill
                  sizes="100vw"
                  priority={i === activeIndex}
                />
              </div>
            )}
          />
        </div>

        {hasMultiple && (
          <ul className={styles.thumbs} aria-label="Миниатюры">
            {images.map((src, i) => (
              <li key={src + i}>
                <button
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  type="button"
                  className={`${styles.thumbButton} ${i === activeIndex ? styles.thumbActive : ""}`}
                  onClick={() => selectModalIndex(i)}
                  aria-label={`Фото ${i + 1}`}
                  aria-current={i === activeIndex}
                >
                  <Image
                    className={styles.thumbImage}
                    src={src}
                    alt=""
                    fill
                    sizes="80px"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body,
  );
}
