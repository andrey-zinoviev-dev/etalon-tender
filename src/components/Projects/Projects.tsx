import { Container } from "../Container";
import { SectionTitleWrapper } from "@/components/SectionTitleWrapper";
import { projects } from "@/utils";

export default function Projects() {
  return (
    <section>
      <Container>
        <SectionTitleWrapper
          descriptorLabel="Наши проекты"
          descriptorVariant="dark"
          headingTitle="Наши проекты"
          headingAccent="любой категории сложности"
        />
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <p>{project.target}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}