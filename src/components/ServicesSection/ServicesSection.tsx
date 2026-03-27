import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
import styles from "./ServicesSection.module.css";
import { Container } from "../Container";
import Accordeon from "../Accordeon/Accordeon";
import { SectionHeading } from "../SectionHeading";
import { SectionDescriptor } from "../SectionDescriptor";

const SERVICES = [
  { label: "Генеральный подряд (СМР)", description: "Управление полным циклом строительно-монтажных работ. Координация субподрядчиков, контроль графиков и бюджетов." },
  { label: "Госконтракты (44-ФЗ, 223-ФЗ)", description: "Возводим производственные цеха и логистические хабы, работаем со сложными грунтами, большепролетными конструкциями ." },
  { label: "Государственные контракты и корпортаивные тендеры", description: "Реализуем проекты в рамках 44-ФЗ и 223-ФЗ, проходим госэкспертизу, гарантируем целевое освоение бюджета." },
  { label: "Монолитные работы и лабораторный контроль", description: "Выполняем бетонные работы любой сложности, обеспечиваем строгий лабораторный контроль прочности и надежности." },
];

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          {/* <SectionHeading title="Услуги ГК Эталон" /> */}
          {/* <SectionTitleWrapper
            descriptorLabel="03_SERVICES"
            descriptorVariant="dark"
            descriptorClassName={styles.descriptor}
            headingId="services-heading"
            headingClassName={styles.headline}
            headingTitle="Услуги"
            headingAccent=""
          /> */}
          <SectionDescriptor label="03_SERVICES" variant="dark" />
          <SectionHeading className={styles.headline} title="Услуги" accent="" />
          <div className={styles.servicesContent}>
            <p className={styles.servicesDescription}>Мы работаем строго в соответствии с нормами и стандартами, проводим лабораторный контроль качества материалов и работ.</p>
            <ul className={styles.servicesList} aria-label="Перечень услуг">
              {SERVICES.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <Accordeon title={service.label} description={service.description} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
