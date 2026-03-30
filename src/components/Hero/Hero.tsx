import { Container } from "@/components/Container/Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <Container className={styles.heroContainer}>
        <div className={styles.heroMain}>
          <div className={styles.grid}>
            <h1 className={styles.offer}>
              ГЕНПОДРЯД ПОЛНОГО ЦИКЛА. ГАРАНТИЯ БЮДЖЕТА И СРОКОВ В УСЛОВИЯХ ЖЕСТКОГО
              РЕГУЛИРОВАНИЯ.
            </h1>
            <p className={styles.description}>
              Синхронизируем масштабные архитектурные концепции с юридическим протоколом,
              создавая индустриальные объекты, защищенные от финансовых и правовых рисков.
            </p>
          </div>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaEst}>EST. 2012 / MOSCOW</span>
          <span className={styles.metaScroll}>ПРОКРУТИТЕ ↓</span>
          <span className={styles.metaCoords}>55.7558° N, 37.6173° E</span>
        </div>
      </Container>
    </section>
  );
}
