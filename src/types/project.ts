export interface Project {
    id: string;
    title: string;
    role: string;
    competencies: string;
    location: string;
    image_source: string;
    // target: string;
    status: "В реализации" | "В архиве" | "Завершено";
    // statusColor: "green" | "red" | "yellow";
    categories: string[];
}

export const PROJECT_STATUS_COLORS = {
    "В процессе строительства": "green",
    "В архиве": "orange",
    "Завершено": "green",
} as const;

