import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionHeading } from "../SectionHeading";
import { projects } from "@/utils";

export default function Projects() {
  return (
    <section>
        <Container>
            <div>
                <SectionDescriptor label="Наши проекты" variant="dark" />
                <SectionHeading title="Наши проекты" accent="любой категории сложности" />
            </div>
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