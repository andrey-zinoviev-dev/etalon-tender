export function scrollTrackToIndex(
  track: HTMLDivElement | null,
  index: number,
  smooth = true,
) {
  if (!track) return;
  track.scrollTo({
    left: index * track.clientWidth,
    behavior: smooth ? "smooth" : "auto",
  });
}
