import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectGallery.module.css";

interface GalleryArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryArrows({ onPrev, onNext }: GalleryArrowsProps) {
  return (
    <>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={onPrev}
        aria-label="Предыдущее фото"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={onNext}
        aria-label="Следующее фото"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}
