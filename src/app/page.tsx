// import Image from "next/image";
// import { Header } from "@/components/Header";
import styles from "./page.module.css";
// import { Container } from "@/components/Container/Container";
import { ServicesSection } from "@/components/ServicesSection";
import Partners from "@/components/Partners";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import PreContacts from "@/components/PreContacts";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Hero />
        {/* <CTA /> */}
        {/* <section className={styles.aboutUs}>
          <Container>
            <div className={styles.aboutUsContent}>
              <h2 className={styles.aboutUsTitle}>Мы создаем самые уникальные здания и реализуем проекты капитального строительства: берем на себя полную юридическую и техническую ответственность за сдачу объектов в срок.</h2>
            </div>
          </Container>
        </section> */}

        <ServicesSection />
        <Partners />
        <Projects />
        {/* <PreContacts /> */}
        <Contacts />
      </main>
    </div>
  );
}
