// import Image from "next/image";
// import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Container } from "@/components/Container/Container";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <Container className={styles.heroContainer}>
            <div>
              <h1 className={styles.heroTitle}>Эталон</h1>
              <div className={styles.stats}>
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
              </div>
              <div>
                <Container>
                  <h2>Мы создаем самые уникальные здания и реализуем проекты капитального строительства: берем на себя полную юридическую и техническую ответственность за сдачу объектов в срок.</h2>
                </Container>
              </div>
              {/* <div style={{ height: '200svh' }}></div> */}
            </div>


          </Container>
        </section>

        <ServicesSection />
      </main>
    </div>
  );
}
