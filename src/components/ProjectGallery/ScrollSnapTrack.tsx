"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { scrollTrackToIndex } from "./scrollTrack";

export interface ScrollSnapTrackHandle {
  scrollToIndex: (index: number, smooth?: boolean) => void;
}

interface ScrollSnapTrackProps {
  slideCount: number;
  activeIndex: number;
  onIndexChange: (index: number) => void;
  ariaLabel: string;
  trackClassName: string;
  renderSlide: (index: number) => React.ReactNode;
}

const ScrollSnapTrack = forwardRef<ScrollSnapTrackHandle, ScrollSnapTrackProps>(
  function ScrollSnapTrack(
    { slideCount, activeIndex, onIndexChange, ariaLabel, trackClassName, renderSlide },
    ref,
  ) {
    const trackRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number, smooth = true) => {
        scrollTrackToIndex(trackRef.current, index, smooth);
      },
    }));

    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const index = Math.round(track.scrollLeft / track.clientWidth);
      if (index >= 0 && index < slideCount && index !== activeIndex) {
        onIndexChange(index);
      }
    };

    return (
      <div
        ref={trackRef}
        className={trackClassName}
        onScroll={handleScroll}
        aria-label={ariaLabel}
      >
        {Array.from({ length: slideCount }, (_, i) => renderSlide(i))}
      </div>
    );
  },
);

export default ScrollSnapTrack;
