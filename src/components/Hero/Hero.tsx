import { Container } from "@/components/Container/Container";
import styles from "./Hero.module.css";
import Image from "next/image";

const OFFICE_LAT = 55.865652;
const OFFICE_LNG = 37.545635;
const OFFICE_MAP_URL = `https://yandex.ru/maps/?whatshere[point]=${OFFICE_LNG},${OFFICE_LAT}&whatshere[zoom]=17`;

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Главный экран">
      <Container className={styles.heroContainer}>
        <div className={styles.heroMain}>
          <div className={styles.grid}>
            <h1 className={styles.offer}>
              ГЕНПОДРЯД ПОЛНОГО ЦИКЛА <br /> ГАРАНТИЯ БЮДЖЕТА И СРОКОВ В УСЛОВИЯХ ЖЕСТКОГО
              РЕГУЛИРОВАНИЯ
            </h1>
            <p className={styles.description}>
              Синхронизируем масштабные архитектурные концепции с юридическим протоколом,
              создавая индустриальные объекты, защищенные от финансовых и правовых рисков.
            </p>
            <span className={styles.metaEst}>EST. 2016 / MOSCOW</span>
            <a
              className={styles.metaCoords}
              href={OFFICE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть локацию на Яндекс.Картах"
            >
              {OFFICE_LAT}, {OFFICE_LNG}
            </a>
            <span className={styles.metaScroll}>ПРОКРУТИТЕ ↓</span>
            <Image className={styles.heroImage} src="/etalon-hero.png" alt="Эталон" width={1000} height={1000} />

          </div>
          
        </div>
        {/* <div className={styles.metaRow}>
          
          
          <Image className={styles.heroImage} src="/etalon-hero.png" alt="Эталон" width={1000} height={1000} />

        </div> */}

      </Container>
    </section>
  );
}
