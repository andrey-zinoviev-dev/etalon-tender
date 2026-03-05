import { SectionDescriptor } from "@/components/SectionDescriptor";
import { SectionHeading } from "@/components/SectionHeading";
import styles from "./ServicesSection.module.css";
import { Container } from "../Container";

const SERVICES = [
  { label: "Генеральный подряд и государственные комиссии", description: "Берем на себя полное управление объектом. Координируем работу субподрядчиков, контролируем ГПР и сдаем здание госкомиссии." },
  { label: "Промышленное строительство и консультирование", description: "Возводим производственные цеха и логистические хабы, работаем со сложными грунтами, большепролетными конструкциями ." },
  { label: "Государственные контракты и корпортаивные тендеры", description: "Реализуем проекты в рамках 44-ФЗ и 223-ФЗ, проходим госэкспертизу, гарантируем целевое освоение бюджета." },
  { label: "Монолитные работы и лабораторный контроль", description: "Выполняем бетонные работы любой сложности, обеспечиваем строгий лабораторный контроль прочности и надежности." },
];

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <SectionDescriptor
              variant="dark"
              label="Наши направления"
              className={styles.descriptor}
            />
            <SectionHeading
              id="services-heading"
              className={styles.headline}
              title="Системный подход к проектированию и строительству объектов"
              accent="любой категории сложности"
            />
          </div>
          <ul className={styles.servicesList} aria-label="Перечень услуг">
          {SERVICES.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <span className={styles.serviceNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.serviceContent}>
                <span className={styles.serviceTitle}>{service.label}</span>
                <span className={styles.serviceDescription}>
                  {service.description}
                </span>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </Container>
      {/* <div className={styles.wrapper}>
        <SectionDescriptor
          variant="dark"
          label="Наши направления"
          className={styles.descriptor}
        />
        <SectionHeading
          id="services-heading"
          className={styles.headline}
          title="Системный подход к проектированию и строительству объектов"
          accent="любой категории сложности"
        />
        <ul className={styles.servicesList} aria-label="Перечень услуг">
          {SERVICES.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <span className={styles.serviceNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.serviceContent}>
                <span className={styles.serviceTitle}>{service.label}</span>
                <span className={styles.serviceDescription}>
                  {service.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
