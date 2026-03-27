"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Accordeon.module.css";
import { useId, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface AccordeonProps {
  title: string;
  description: string;
//   icon: string;
}

export default function Accordeon({ title, description }: AccordeonProps) {
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
        <span className={styles.accordeonButtonTitle}>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
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
        <span className={styles.accordeonButtonDescriptionText}>
          {description}
        </span>
      </span>
    </button>
  );
}