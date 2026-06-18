export const MOBILE_BREAKPOINT = 768;
export const TAP_THRESHOLD = 10;

export function isMobileViewport() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}
