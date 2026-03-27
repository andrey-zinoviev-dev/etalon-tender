import { Container } from "../Container";
import { SectionTitleWrapper } from "@/components/SectionTitleWrapper/SectionTitleWrapper";
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
        {/* <SectionTitleWrapper
          // className={styles.header}
          descriptorLabel="Партнеры"
          descriptorVariant="dark"
          headingTitle="Наши ключевые партнеры"
          headingAccent="в государственных и корпоративных проектах"
        /> */}
        {/* <div className={styles.grid} aria-label="Партнеры компании">
          {PARTNERS.map((partner) => (
            <div key={partner} className={styles.cell}>
              {partner}
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  );
}