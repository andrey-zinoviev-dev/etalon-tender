export interface Project {
    id: number;
    name: string;
    type: string;
    cover: string;
    target: string;
    status: "В процессе строительства" | "В архиве" | "Завершено";
    // statusColor: "green" | "red" | "yellow";
    categories: string[];
}

export const PROJECT_STATUS_COLORS = {
    "В процессе строительства": "green",
    "В архиве": "orange",
    "Завершено": "green",
} as const;

