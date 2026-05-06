import styles from "./ServicesSection.module.css";
import { Container } from "../Container";
import { SectionGrid } from "../SectionGrid";
import { SectionHeading } from "../SectionHeading";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionParagraph } from "../SectionParagraph/SectionParagraph";

const SERVICES = [
  { label: "Генеральный подряд (СМР)", description: "Управление полным циклом строительно-монтажных работ. Координация субподрядчиков, контроль графиков и бюджетов." },
  { label: "Госконтракты (44-ФЗ, 223-ФЗ)", description: "Возводим производственные цеха и логистические хабы, работаем со сложными грунтами, большепролетными конструкциями ." },
  { label: "Корпортаивные тендеры", description: "Реализуем проекты в рамках 44-ФЗ и 223-ФЗ, проходим госэкспертизу, гарантируем целевое освоение бюджета." },
  { label: "Проектная, надзорная деятельность", description: "Выполняем бетонные работы любой сложности, обеспечиваем строгий лабораторный контроль прочности и надежности." },
  { label: "Сервис и сопровождение", description: "Постпродажное сопровождение, гарантийные обязательства и консультации по эксплуатации объекта." },
];

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container className={styles.container}>
        <SectionGrid className={styles.columnGrid}>
        {/* <div className={styles.wrapper}> */}
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

        {/* </div> */}
        <SectionDescriptor label="03_SERVICES" variant="dark" />
        <SectionHeading className={styles.headline} title="Услуги" accent="" />
        <SectionParagraph className={styles.servicesDescription}>
          Мы работаем строго в соответствии с нормами и стандартами, проводим лабораторный контроль качества материалов и работ.
        </SectionParagraph>
        <ul className={styles.servicesList} aria-label="Перечень услуг">
          {SERVICES.map((service, index) => (
            <li key={service.label} className={styles.serviceItem}>
              <div className={styles.serviceRow}>
                <h3 className={styles.serviceTitle} id={`service-title-${index}`}>
                  {service.label}
                </h3>
                <p
                  className={styles.serviceDescription}
                  aria-labelledby={`service-title-${index}`}
                >
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
          {/* <div className={styles.servicesContent}>
            
          </div> */}
        </SectionGrid>
      </Container>
    </section>
  );
}
