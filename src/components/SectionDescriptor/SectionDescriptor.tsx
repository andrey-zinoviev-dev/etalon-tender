import styles from "./SectionDescriptor.module.css";

type SectionDescriptorProps = {
  label: string;
  /** Use "dark" when the descriptor is on a black/dark background */
  variant?: "light" | "dark";
  className?: string;
};

export function SectionDescriptor({
  label,
  variant = "light",
  className,
}: SectionDescriptorProps) {
  return (
    <div
      className={`${styles.sectionDescriptor} ${variant === "dark" ? styles.sectionDescriptorDark : ""} ${className ?? ""}`}
    >
      {/* <span className={styles.sectionDescriptorIcon} aria-hidden /> */}
      <span className={styles.sectionDescriptorLabel}>{label}</span>
    </div>
  );
}
