import styles from "./CTA.module.css";
import { Container } from "../Container";
export default function CTA() {
    return (
        <section className={styles.cta}>
            <Container>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Мы создаем самые уникальные здания и реализуем проекты капитального строительства: берем на себя полную юридическую и техническую ответственность за сдачу объектов в срок.</h2>
                    <button className={styles.ctaButton}>Оставить заявку</button>
                </div>
            </Container>
        </section>
    );
}