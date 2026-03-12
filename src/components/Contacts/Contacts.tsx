import { Container } from "../Container";
import styles from "./Contacts.module.css";
import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
export default function Contacts() {
    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.contactsContent}>
                    <SectionTitleWrapper
                        descriptorLabel="Сотрудничество"
                        descriptorVariant="dark"
                        descriptorClassName={styles.descriptor}
                        headingTitle="Контакты и связь с нами,"
                        headingAccent="чтобы сотрудничество стало реальностью"
                    />

                    <ul className={styles.contactsList}>
                        <li className={styles.contactsItem}>
                            <span className={styles.contactsItemTitle}>Направления</span>
                            <div className={styles.contactsItemContent}>
                                <div className={styles.contactsItemContentItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Инженерные вопросы</span>
                                    <div className={styles.contactsItemContentItemLinks}>
                                        <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998038">+7 (987) 999-80-38</a>
                                        <a className={styles.contactsItemContentItemLink} href="mailto:info@example.com">engineer-ex@etalon-tender.ru</a>
                                    </div>

                                </div>
                                <div className={styles.contactsItemContentItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Срочные вопросы</span>
                                    <div className={styles.contactsItemContentItemLinks}>
                                        <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998038">+7 (987) 999-80-38</a>
                                        <a className={styles.contactsItemContentItemLink} href="mailto:info@example.com">emergency-ex@etalon-tender.ru</a>
                                    </div>
                                </div>
                                <div className={styles.contactsItemContentItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Общие вопросы</span>
                                    <div className={styles.contactsItemContentItemLinks}>
                                        <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998038">+7 (987) 999-80-38</a>
                                        <a className={styles.contactsItemContentItemLink} href="mailto:info@example.com">general-ex@etalon-tender.ru</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.contactsItem}>
                            <span className={styles.contactsItemTitle}>Офис</span>
                            <div className={styles.contactsItemContent}>
                                <span>Электрический пер, д. 3/10 стр. 1</span>
                                <span>Москва, 123557</span>
                            </div>
                        </li>
                        <li className={styles.contactsItem}>
                            <span className={styles.contactsItemTitle}>Режим работы</span>
                            <div className={styles.contactsItemContent}>
                                <span>Пн-Пт: 09:00 - 18:00</span>
                                <span>Сб-Вс: Выходной</span>
                            </div>

                        </li>
                    </ul>

                </div>
            </Container>
        </section>
    );
};