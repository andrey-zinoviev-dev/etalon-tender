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
      className={`${styles.root} ${variant === "dark" ? styles.rootDark : ""} ${className ?? ""}`}
    >
      <span className={styles.icon} aria-hidden />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
