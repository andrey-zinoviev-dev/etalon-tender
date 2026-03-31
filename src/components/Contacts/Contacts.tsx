import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionGrid } from "../SectionGrid";
import { SectionHeading } from "../SectionHeading";
import styles from "./Contacts.module.css";

export default function Contacts() {
    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.contactsContent}>
                    <SectionGrid>
                        <SectionDescriptor label="07_CONTACTS" variant="dark" />
                        <SectionHeading className={styles.headline} title="Контакты" accent="" />
                        <p className={styles.contactsDescription}>Готовы обсудить ваш проект и узнать подробнее о ваших идеях</p>
                        
                        <div className={styles.contactsLinksGrid}>
                            <div className={styles.contactsColumn}>
                                <div className={styles.contactsColumnItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Инженерные вопросы</span>
                                    <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998038">+7 (987) 999-80-38</a>
                                    <a className={styles.contactsItemContentItemLink} href="mailto:engineer-ex@etalon-tender.ru">engineer-ex@etalon-tender.ru</a>
                                </div>
                                <div className={styles.contactsColumnItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Срочные вопросы</span>
                                    <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998038">+7 (987) 999-80-38</a>
                                    <a className={styles.contactsItemContentItemLink} href="mailto:emergency-ex@etalon-tender.ru">emergency-ex@etalon-tender.ru</a>
                                </div>
                                <div className={styles.contactsColumnItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Общие вопросы</span>
                                    <a className={styles.contactsItemContentItemLink} href="tel:+7(987)9998039">+7 (987) 999-80-39</a>
                                    <a className={styles.contactsItemContentItemLink} href="mailto:general-ex@etalon-tender.ru">general-ex@etalon-tender.ru</a>
                                </div>
                            </div>
                            <div className={styles.contactsColumn}>
                                <div className={styles.contactsColumnItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Офис</span>
                                    <span>Электрический пер, д. 3/10 стр. 1</span>
                                    <span>Москва, 123557</span>
                                </div>
                                <div className={styles.contactsColumnItem}>
                                    <span className={styles.contactsItemContentItemTitle}>Режим работы</span>
                                    <span>Пн-Пт: 09:00 - 18:00</span>
                                    <span>Сб-Вс: Выходной</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        {/* <ul className={styles.contactsList}>
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
                    </ul> */}
                    </SectionGrid>
                    {/* <SectionTitleWrapper
                        descriptorLabel="Сотрудничество"
                        descriptorVariant="dark"
                        descriptorClassName={styles.descriptor}
                        headingTitle=""
                        headingAccent=""
                    /> */}

                    {/* <h2 className={styles.contactsTitle}>Готовы обсудить ваш проект и узнать подробнее о ваших идеях</h2> */}

                    

                </div>
            </Container>
        </section>
    );
};