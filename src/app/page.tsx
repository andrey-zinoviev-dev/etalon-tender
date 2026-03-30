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
import Complience from "@/components/Complience";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Hero />
        {/* <CTA /> */}
       
        <Complience />
        <ServicesSection />
        <Partners />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}
