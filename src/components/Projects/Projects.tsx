import { Container } from "../Container";
import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
import { projects } from "@/utils";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <Container>
        <div className={styles.projectsContent}>
          <SectionTitleWrapper
            descriptorLabel="Наши проекты"
            descriptorVariant="dark"
            headingTitle="Наши проекты"
            headingAccent="любой категории сложности"
          />

          <ul className={styles.projectsList}>
            {projects.map((project) => (
              <li className={styles.projectItem} key={project.id}>
                <div className={styles.projectImageWrapper}>
                  <span className={styles.projectStatus}>{project.status}</span>
                  <Image className={styles.projectImage} src={project.cover} alt={project.name} width={870} height={500} />
                </div>
                <h3 className={styles.projectTitle}>{project.name}</h3>
                <div className={styles.projectInfo}>
                  <p className={styles.projectType}><span className={styles.projectInfoTitle}>Направление:</span> {project.type}</p>
                  <p className={styles.projectTarget}><span className={styles.projectInfoTitle}>Задача:</span> {project.target}</p>
                </div>
                <ul className={styles.projectCategories}>
                  {project.categories.map((category) => (
                    <li key={category} className={styles.projectCategoryItem}>{category}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}