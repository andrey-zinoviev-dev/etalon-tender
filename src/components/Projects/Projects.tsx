import { Container } from "../Container";
import { SectionGrid, sectionGrid } from "../SectionGrid";
// import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
import { projects } from "@/utils";
import Image from "next/image";
import styles from "./Projects.module.css";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionHeading } from "../SectionHeading";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <Container>
        <SectionGrid>
        <SectionDescriptor label="05_PROJECTS" variant="dark" />
          <SectionHeading className={styles.headline} title="Проекты" accent="" />
          {/* <SectionTitleWrapper
            descriptorLabel="Наши проекты"
            descriptorVariant="dark"
            headingTitle="Наши проекты"
            headingAccent="любой категории сложности"
          /> */}

          <ul className={[sectionGrid.fullSpan, styles.projectsList].join(" ")}>
            {projects.map((project) => (
              <li className={styles.projectItem} key={project.id}>
                <div className={styles.projectImageWrapper}>
                  <span className={styles.projectStatus}>{project.status}</span>
                  <Image className={styles.projectImage} src={project.cover} alt={project.name} width={870} height={500} />
                </div>
                <div className={styles.projectInfo}>
                  <ul className={styles.projectCategories}>
                    {project.categories.map((category) => (
                      <li key={category} className={styles.projectCategoryItem}>{category}</li>
                    ))}
                  </ul>
                  <div className={styles.projectInfoContent}>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectTarget}><span className={styles.projectInfoTitle}>Задача:</span> {project.target}</p>
                  </div>
                </div>

                {/* <div className={styles.projectInfo}>
                  <p className={styles.projectType}><span className={styles.projectInfoTitle}>Направление:</span> {project.type}</p>
                </div> */}
              </li>
            ))}
          </ul>
        {/* <div className={`${sectionGrid.fullSpan} ${styles.projectsContent}`}>
          
        </div> */}
        </SectionGrid>
      </Container>
    </section>
  );
}