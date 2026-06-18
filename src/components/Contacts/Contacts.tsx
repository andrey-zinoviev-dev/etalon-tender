import { CSSProperties } from "react";
import { Container } from "../Container";
import { SectionDescriptor } from "../SectionDescriptor";
import { SectionGrid } from "../SectionGrid";
import { SectionHeading } from "../SectionHeading";
import { SectionParagraph } from "../SectionParagraph/SectionParagraph";
import styles from "./Contacts.module.css";

type PersonContact = {
    type: "person";
    id: string;
    title: string;
    name: string;
    phone: string;
    phoneHref: string;
    email: string;
};

type InfoContact = {
    type: "info";
    id: string;
    title: string;
    lines: string[];
    right: true;
};

type ContactBlock = PersonContact | InfoContact;

const CONTACT_BLOCKS: ContactBlock[] = [
    {
        type: "person",
        id: "general",
        title: "Общие вопросы",
        name: "Рудь Сергей",
        phone: "+7 (928) 306-51-69",
        phoneHref: "tel:+7(928)3065169",
        email: "s.rud@gk-etalon.com",
    },
    {
        type: "person",
        id: "technical",
        title: "Технические вопросы",
        name: "Бородин Петр",
        phone: "+7 (921) 359-68-58",
        phoneHref: "tel:+7(921)3596858",
        email: "p.borodin@gk-etalon.com",
    },
    {
        type: "person",
        id: "contracting",
        title: "Контрактация и вопросы по сотрудничеству",
        name: "Капков Сергей",
        phone: "+7 (999) 858-77-81",
        phoneHref: "tel:+7(999)8587781",
        email: "s.kapkov@gk-etalon.com",
    },
    {
        type: "person",
        id: "tenders",
        title: "Тендеры",
        name: "Можелов Андрей",
        phone: "+7 (987) 999-80-38",
        phoneHref: "tel:+7(987)9998038",
        email: "a.mozhelov@gk-etalon.com",
    },
    {
        type: "info",
        id: "office",
        title: "Штаб-квартира",
        lines: ["Электрический пер, д. 3/10 стр. 1", "Москва, 123557"],
        right: true,
    },
    {
        type: "info",
        id: "schedule",
        title: "Режим работы",
        lines: ["Пн-Пт: 09:00 - 18:00", "Сб-Вс: Выходной"],
        right: true,
    },
];

function getGridPlacement(block: ContactBlock, blocks: ContactBlock[]) {
    const isRight = block.type === "info";
    const group = blocks.filter((item) => (item.type === "info") === isRight);
    const index = group.indexOf(block);

    return {
        gridRow: index + 1,
        gridColumn: isRight ? 2 : 1,
    };
}

function ContactBlockItem({ block }: { block: ContactBlock }) {
    return (
        <>
            <h3 className={styles.contactsItemContentItemTitle}>{block.title}</h3>
            {block.type === "person" ? (
                <>
                    <span className={styles.contactsItemContentItemLink}>{block.name}</span>
                    <a className={styles.contactsItemContentItemLink} href={block.phoneHref}>
                        {block.phone}
                    </a>
                    <a className={styles.contactsItemContentItemLink} href={`mailto:${block.email}`}>
                        {block.email}
                    </a>
                </>
            ) : (
                block.lines.map((line) => <span key={line}>{line}</span>)
            )}
        </>
    );
}

export default function Contacts() {
    return (
        <section id="contacts" className={styles.contacts}>
            <Container>
                <div className={styles.contactsContent}>
                    <SectionGrid>
                        <SectionDescriptor label="06_CONTACTS" variant="dark" />
                        <SectionHeading className={styles.headline} title="Контакты" accent="" />
                        <SectionParagraph className={styles.contactsDescription}>
                            Готовы обсудить ваш проект и узнать подробнее о ваших идеях
                        </SectionParagraph>

                        <div className={styles.contactsLinksGrid}>
                            {CONTACT_BLOCKS.map((block) => {
                                const { gridRow, gridColumn } = getGridPlacement(block, CONTACT_BLOCKS);

                                return (
                                    <div
                                        key={block.id}
                                        className={styles.contactsColumnItem}
                                        style={
                                            {
                                                "--grid-row": gridRow,
                                                "--grid-column": gridColumn,
                                            } as CSSProperties
                                        }
                                    >
                                        <ContactBlockItem block={block} />
                                    </div>
                                );
                            })}
                        </div>
                    </SectionGrid>
                </div>
            </Container>
        </section>
    );
}
