import Link from "next/link";
import { Container } from "../Container";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div>
                    <div>
                        <h2>Эталон</h2>
                        <div className={styles.footerInfo}>
                            <span>ООО  “Эталон”</span>
                            <span>ИНН: 7726379159</span>
                            <span>ОГРН: 1167746534</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link href="/">Главная</Link>
                        </li>
                        <li>
                            <Link href="/">Проекты</Link>
                        </li>
                        <li>
                            <Link href="/">Услуги</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">О компании</Link>
                        </li>
                        <li>
                            <Link href="/">Лицензии и СРО</Link>
                        </li>
                    </ul>
                </div>

            </Container>
        </footer>
    );
};