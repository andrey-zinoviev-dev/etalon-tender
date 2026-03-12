import { SectionDescriptor } from "@/components/SectionDescriptor";
import { SectionHeading } from "@/components/SectionHeading";
import styles from "./SectionTitleWrapper.module.css";

export type SectionTitleWrapperProps = {
  /** Descriptor label (e.g. "Наши направления") */
  descriptorLabel: string;
  /** Use "dark" when the block is on a black/dark background */
  descriptorVariant?: "light" | "dark";
  /** Optional id for the heading (for aria-labelledby) */
  headingId?: string;
  /** Main heading title */
  headingTitle: string;
  /** Accent phrase after the title */
  headingAccent: string;
  /** Optional class for the root wrapper */
  className?: string;
  /** Optional class for the descriptor */
  descriptorClassName?: string;
  /** Optional class for the heading */
  headingClassName?: string;
};

/**
 * Wrapper that combines SectionDescriptor + SectionHeading.
 * Layout: flex column, max-width 420px, gap 24px.
 */
export function SectionTitleWrapper({
  descriptorLabel,
  descriptorVariant = "dark",
  headingId,
  headingTitle,
  headingAccent,
  className,
  descriptorClassName,
  headingClassName,
}: SectionTitleWrapperProps) {
  return (
    <div className={`${styles.sectionTitleWrapper} ${className ?? ""}`.trim()}>
      <SectionDescriptor
        label={descriptorLabel}
        variant={descriptorVariant}
        className={descriptorClassName}
      />
      <SectionHeading
        id={headingId}
        title={headingTitle}
        accent={headingAccent}
        className={headingClassName}
      />
    </div>
  );
}
