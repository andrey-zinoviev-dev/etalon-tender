import styles from "./CompetenceListItem.module.css";

export type CompetenceListItemProps = {
  label: string;
  headline: string;
  description: string;
};

export function CompetenceListItem({
  label,
  headline,
  description,
}: CompetenceListItemProps) {
  return (
    <li className={styles.root}>
      <span className={styles.label}>{label}</span>
      <h3 className={styles.headline}>{headline}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
