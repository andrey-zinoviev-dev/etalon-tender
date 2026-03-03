import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  title: string;
  accent: string;
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  accent,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={className ? `${styles.heading} ${className}` : styles.heading}
    >
      {title}
      {accent && (
        <span className={styles.accent}> {accent}</span>
      )}
    </h2>
  );
}
