"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Accordeon.module.css";
import { useId, useState } from "react";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";

interface AccordeonProps {
  title: string;
  description: string;
  index: number;
//   icon: string;
}

export default function Accordeon({ title, description, index }: AccordeonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <button
      className={styles.accordeonButton}
      type="button"
      onClick={() => setIsOpen((v) => !v)}
      aria-expanded={isOpen}
      aria-controls={panelId}
      data-open={isOpen}
    >
      <span className={styles.accordeonButtonRow}>
        <span className={styles.accordeonButtonIndex}>{`0${index}`}</span>
        <span className={styles.accordeonButtonTitle}>{title}</span>
        <FontAwesomeIcon
          icon={faPlus}
          className={styles.accordeonButtonIcon}
          aria-hidden
        />
      </span>

      {/* Keep mounted for graceful close animation */}
      <span
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        className={styles.accordeonButtonDescriptionPanel}
      >
        <span className={styles.accordeonButtonDescriptionInner}>
          <span className={styles.accordeonButtonDescriptionText}>
            {description}
          </span>
        </span>
      </span>
    </button>
  );
}