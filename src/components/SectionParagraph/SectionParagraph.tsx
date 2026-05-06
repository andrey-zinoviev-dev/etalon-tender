import type { ReactNode } from "react";
import styles from "./SectionParagraph.module.css";

export type SectionParagraphProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionParagraph({ children, className, id }: SectionParagraphProps) {
  return (
    <p id={id} className={[styles.root, className].filter(Boolean).join(" ").trim()}>
      {children}
    </p>
  );
}
