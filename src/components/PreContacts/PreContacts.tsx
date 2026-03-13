import { Container } from "../Container";
import styles from "./PreContacts.module.css";

export default function PreContacts() {
    return (
        <section className={styles.preContacts}>
            <Container>
                <div className={styles.preContactsContent}>
                    <h2 className={styles.preContactsTitle}>ГОТОВЫ ОБСУДИТЬ ВАШ ПРОЕКТ И УЗНАТЬ ПОДРОБНЕЕ О ВАШИХ ИДЕЯХ</h2>
                </div>
            </Container>
        </section>
    );
}