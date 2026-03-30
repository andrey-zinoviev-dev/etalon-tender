import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionGrid } from "../SectionGrid";
import { SectionHeading } from "../SectionHeading";
import { CompetenceListItem } from "../CompetenceListItem";
import styles from "./Complience.module.css";

const COMPETENCES = [
    { label: "НАЛОГИ", headline: "22% НДС", description: "Работаем по ОСНО с полным вычетом. Нулевой риск по разрывам НДС (система АСК НДС-2)." },
    { label: "ДОПУСКИ", headline: "СРО", description: "Членство в реестре СРО с 1-м уровнем ответственности. Допуски на особо опасные объекты." },
    { label: "ЛИЦЕНЗИИ", headline: "МЧС / МИНКУЛЬТ", description: "Полный пакет лицензий на проектирование и монтаж систем безопасности и реставрацию." },
    { label: "РИСКИ", headline: "50 МЛН РУБЛЕЙ", description: "Гражданская ответственность застрахована на каждый объект строительства." },
];

export default function Complience() {
    return (
        <section className={styles.section}>
            <Container>
                <SectionGrid>
                    <SectionDescriptor label="02_COMPLIANCE" variant="dark" />
                    <SectionHeading title="Компетенции" accent="" />
                    <p className={styles.competencesDescription}>Обеспечиваем юридическую и финансовую чистоту каждого этапа строительства. <br /> Работаем по стандартам комплаенса крупнейших госкорпораций.</p>
                    <ul className={styles.competencesList}>
                        {COMPETENCES.map((competence) => (
                            <CompetenceListItem
                                key={competence.label}
                                label={competence.label}
                                headline={competence.headline}
                                description={competence.description}
                            />
                        ))}
                    </ul>
                </SectionGrid>
            </Container>
        </section>
    );
}