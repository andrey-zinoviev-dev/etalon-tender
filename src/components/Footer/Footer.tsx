import Link from "next/link";
import { Container } from "../Container";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <div className={styles.footerTopWrapper}>
                        <h2 className={styles.footerTitle}>Эталон</h2>
                        <div className={styles.footerInfo}>
                            <span>ООО  “Эталон”</span>
                            <span>ИНН: 7726379159</span>
                            <span>ОГРН: 1167746534</span>
                        </div>
                    </div>
                    
                    <div className={styles.footerMiddleWrapper}>
                        <ul className={styles.footerMiddleList}>
                            <li className={styles.footerMiddleItem}>
                                <Link href="/">Главная</Link>
                            </li>
                            <li className={styles.footerMiddleItem}>
                                <Link href="/">Проекты</Link>
                            </li>
                            <li className={styles.footerMiddleItem}>
                                <Link href="/">Услуги</Link>
                            </li>
                        </ul>
                        <ul className={styles.footerMiddleList}>
                            <li className={styles.footerMiddleItem}>
                                <Link href="/">О компании</Link>
                            </li>
                            <li className={styles.footerMiddleItem}>
                                <Link href="/">Лицензии и СРО</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </Container>
        </footer>
    );
};