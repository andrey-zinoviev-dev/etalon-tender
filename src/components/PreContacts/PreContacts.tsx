import { Container } from "../Container";
import { SectionGrid, sectionGrid } from "../SectionGrid";
import styles from "./PreContacts.module.css";

export default function PreContacts() {
    return (
        <section className={styles.preContacts}>
            <Container>
                <SectionGrid>
                <div className={`${sectionGrid.fullSpan} ${styles.preContactsContent}`}>
                    <h2 className={styles.preContactsTitle}>ГОТОВЫ ОБСУДИТЬ ВАШ ПРОЕКТ И УЗНАТЬ ПОДРОБНЕЕ О ВАШИХ ИДЕЯХ</h2>
                </div>
                </SectionGrid>
            </Container>
        </section>
    );
}