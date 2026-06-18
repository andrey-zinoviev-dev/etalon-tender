import styles from "./ProjectGallery.module.css";

interface GalleryDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function GalleryDots({ count, activeIndex, onSelect }: GalleryDotsProps) {
  return (
    <ul className={styles.dots} aria-label="Навигация по фото">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>
          <button
            type="button"
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
            onClick={() => onSelect(i)}
            aria-label={`Фото ${i + 1} из ${count}`}
            aria-current={i === activeIndex}
          />
        </li>
      ))}
    </ul>
  );
}
