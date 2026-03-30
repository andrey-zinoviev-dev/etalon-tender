import { type HTMLAttributes } from "react";
import styles from "./SectionGrid.module.css";

/** Use for `grid-column: 1 / -1` on children of `SectionGrid`. */
export const sectionGrid = styles;

type SectionGridProps = HTMLAttributes<HTMLDivElement>;

export function SectionGrid({ className, children, ...props }: SectionGridProps) {
  return (
    <div
      className={
        className ? `${styles.sectionGrid} ${className}` : styles.sectionGrid
      }
      {...props}
    >
      {children}
    </div>
  );
}
