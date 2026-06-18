import { Container } from "../Container";
import { SectionGrid, sectionGrid } from "../SectionGrid";
// import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
import { projects } from "@/utils";
import ProjectGallery from "@/components/ProjectGallery";
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
                <ProjectGallery
                  images={project.images}
                  alt={project.title}
                  status={project.status}
                />
                <div className={styles.projectInfo}>
                  <ul className={styles.projectCategories}>
                    {project.categories.map((category) => (
                      <li key={category} className={styles.projectCategoryItem}>{category}</li>
                    ))}
                  </ul>
                  <div className={styles.projectInfoContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectTarget}><span className={styles.projectInfoTitle}>Роль: </span> {project.role}</p>
                    <p className={styles.projectTarget}><span className={styles.projectInfoTitle}>Компетенции: </span> {project.competencies}</p>
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