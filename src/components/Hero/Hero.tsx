import { Container } from "@/components/Container/Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Проектируем здания, проводим тендеры и работаем с НДФЛ.</h1>
            <p className={styles.heroDescription}>Берем на себя полную юридическую и техническую ответственность за сдачу объектов в срок.</p>
          </div>
          {/* <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>550 000 м²</div>
              <div className={styles.statLabel}>
                Общая площадь реализованных объектов
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>120 единиц</div>
              <div className={styles.statLabel}>
                Собственный парк строительной техники
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>18 лет</div>
              <div className={styles.statLabel}>
                Безупречной реализации госконтрактов
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>450+</div>
              <div className={styles.statLabel}>
                Реализованных контрактов по ФЗ-44 и ФЗ-223
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}

