import { Container } from "../Container";
import { SectionGrid } from "../SectionGrid";
import styles from "./Partners.module.css";
import { SectionHeading } from "../SectionHeading";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionParagraph } from "../SectionParagraph/SectionParagraph";
import Image from "next/image";

const CUSTOMERS = [
  // { id: "01", name: "Sminex", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
  // { id: "02", name: "ГК ВЕКТОР", status: "Генподряд / СМР", projects: "4 объекта", logo: "/vector.svg" },
  { id: "03", name: "SLOИ", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sloi.webp" },
  // { id: "04", name: "СПЕЦЭЛИТСТРОЙ", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
  // { id: "05", name: "АЛЬФАСТРОЙ ПЛЮС", status: "Генподряд / СМР", projects: "4 объекта", logo: "/alpha.webp" },
  { id: "06", name: "МЕТАЛЛПАТИНА", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionGrid>
          <SectionDescriptor label="04_PARTNERS" variant="dark" />
          <SectionHeading title="Партнеры" accent="" />
          <SectionParagraph className={styles.description}>
            Мы работаем строго в соответствии с нормами и стандартами, проводим лабораторный контроль качества материалов и работ.
          </SectionParagraph>
          <ul className={styles.list} aria-label="Заказчики">
            {CUSTOMERS.map((customer) => (
              <li key={customer.id} className={styles.row}>
                <div className={styles.primary}>
                  {/* <Image
                    className={styles.logo}
                    src={customer.logo}
                    alt=""
                    width={120}
                    height={48}
                  /> */}
                  <span className={styles.companyName}>{customer.name}</span>
                </div>
                <div className={styles.secondary}>
                  <span className={styles.meta}>({customer.projects})</span>
                  <span className={styles.role}>{customer.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </SectionGrid>
      </Container>
    </section>
  );
}
