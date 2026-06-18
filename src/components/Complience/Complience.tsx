import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionGrid } from "../SectionGrid";
import { SectionHeading } from "../SectionHeading";
import { CompetenceListItem } from "../CompetenceListItem";
import { SectionParagraph } from "../SectionParagraph/SectionParagraph";
import styles from "./Complience.module.css";

const COMPETENCES = [
    // { label: "НАЛОГИ", headline: "22% НДС", description: "Работаем по ОСНО с полным вычетом." },
    { 
        label: "ОПЫТ", 
        headline: ">600 МЛН РУБЛЕЙ", 
        description: "10 лет работы. Исполнено госконтрактов на 500 млн руб. и коммерческих на 100 млн руб." 
    },
    { label: "СРО", headline: "СРО", description: "В составе ГК Эталон 2 фирмы с лицензией СРО для работы с госудаственными объектами." },
    // { label: "ДОПУСКИ", headline: "МЧС / МИНКУЛЬТ", description: "Полный пакет лицензий на проектирование и монтаж систем безопасности и реставрацию." },
    { label: "РИСКИ", headline: "50 МЛН РУБЛЕЙ", description: "Гражданская ответственность застрахована на каждый объект строительства." },
    { 
        label: "КОМПЛАЕНС", 
        headline: "100% ЧИСТОТА", 
        description: "Безупречная налоговая история и финансовая прозрачность. Проходим комплаенс-контроль и аудит СБ крупных девелоперов." 
    },
    { 
        label: "РЕЗУЛЬТАТ", 
        headline: "ВВОД В СРОК", 
        description: "Выполнение директивного графика строительной готовности. Собственная служба контроля качества исключает критические предписания технадзора и остановку работ." 
    }
];

export default function Complience() {
    return (
        <section className={styles.section}>
            <Container>
                <SectionGrid>
                    <SectionDescriptor label="02_COMPLIANCE" variant="dark" />
                    <SectionHeading title="Компетенции" accent="" />
                    <SectionParagraph className={styles.competencesDescription}>
                        Обеспечиваем юридическую и финансовую чистоту каждого этапа строительства. <br /> Работаем по стандартам комплаенса крупнейших госкорпораций.
                    </SectionParagraph>
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