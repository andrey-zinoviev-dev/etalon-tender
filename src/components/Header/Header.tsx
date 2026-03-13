import Link from "next/link";
import { Container } from "@/components/Container";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div className={styles.logo}>Эталон</div>

        <nav className={styles.nav}>
          <Link href="#company" className={styles.navLink}>
            Компания
          </Link>
          <Link href="#projects" className={styles.navLink}>
            Объекты
          </Link>
          <Link href="#services" className={styles.navLink}>
            Услуги
          </Link>
          <Link href="#documents" className={styles.navLink}>
            Документы
          </Link>
          <Link href="#contacts" className={styles.navLink}>
            Контакты
          </Link>
        </nav>
        <button className={styles.ctaButton}>
          Заказать консультацию
        </button>

        {/* <div className={styles.actions}>
          <a href="tel:+78000000000" className={styles.phone}>
            8 800 000-00-00
          </a>
          <button type="button" className={styles.cta}>
            Оставить заявку
          </button>
        </div> */}
      </Container>
    </header>
  );
}

