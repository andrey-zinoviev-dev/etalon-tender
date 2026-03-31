import { Container } from "../Container";
import { SectionGrid } from "../SectionGrid";
// import { SectionTitleWrapper } from "@/components/SectionTitleWrapper/SectionTitleWrapper";
import styles from "./Partners.module.css";
import { SectionHeading } from "../SectionHeading";
import { SectionDescriptor } from "../SectionDescriptor";
import Image from "next/image";
const CUSTOMERS = [
  { id: "01", name: "Sminex", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
  { id: "02", name: "ГК ВЕКТОР", status: "Генподряд / СМР", projects: "4 объекта", logo: "/vector.svg" },
  { id: "03", name: "SLOИ", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sloi.webp" },
  { id: "04", name: "СПЕЦЭЛИТСТРОЙ", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
  { id: "05", name: "АЛЬФАСТРОЙ ПЛЮС", status: "Генподряд / СМР", projects: "4 объекта", logo: "/alpha.webp" },
  { id: "06", name: "МЕТАЛЛПАТИНА", status: "Генподряд / СМР", projects: "4 объекта", logo: "/sminex.jpg" },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionGrid>
          <SectionDescriptor label="05_PARTNERS" variant="dark" />
          <SectionHeading title="Партнеры" accent="" />
          <p className={styles.description}>Мы работаем строго в соответствии с нормами и стандартами, проводим лабораторный контроль качества материалов и работ.</p>
          <ul className={styles.list} aria-label="Заказчики">
            {CUSTOMERS.map((customer) => (
              <li key={customer.id} className={styles.row}>
                <span className={styles.index}>{customer.id}</span>
                <Image className={styles.logo} src={customer.logo} alt={customer.name} width={100} height={100} />
                {/* <div className={styles.logoSlot} aria-hidden="true" /> */}
                <span className={styles.companyName}>{customer.name}</span>
                <span className={styles.projects}>{customer.projects}</span>
                <span className={styles.status}>{customer.status}</span>
                {/* <div className={styles.meta}> */}
                  {/* <div className={styles.projects}>{customer.projects}</div> */}
                {/* </div> */}
              </li>
            ))}
          </ul>
          {/* <SectionTitleWrapper
          // className={styles.header}
          descriptorLabel="Партнеры"
          descriptorVariant="dark"
          headingTitle="Наши ключевые партнеры"
          headingAccent="в государственных и корпоративных проектах"
        /> */}
          {/* <div className={styles.grid} aria-label="Партнеры компании">
          {PARTNERS.map((partner) => (
            <div key={partner} className={styles.cell}>
              {partner}
            </div>
          ))}
        </div> */}
        </SectionGrid>
      </Container>
    </section>
  );
}