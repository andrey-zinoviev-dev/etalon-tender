import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionHeading } from "../SectionHeading";
import styles from "./Partners.module.css";

const PARTNERS = [
  "ПИК-строй",
  "РЖД-строй",
  "РОСТЕХ",
  "ГАЗПРОМ ИНВЕСТ",
  "ГАЛС-ДЕВЕЛОПМЕНТ",
  "РОСНАНО",
  "Level",
  "Роскосмос",
  "РОСАТОМ",
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <SectionDescriptor label="Партнеры" variant="dark" />
          <SectionHeading
            title="Наши ключевые партнеры"
            accent="в государственных и корпоративных проектах"
          />
        </div>
        <div className={styles.grid} aria-label="Партнеры компании">
          {PARTNERS.map((partner) => (
            <div key={partner} className={styles.cell}>
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}