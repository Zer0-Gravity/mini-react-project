export interface ProjectType {
    projectId: string;
    projectName: string;
    board: string[];
}

export interface BoardType {
    boardId: string;
    boardName: string;
    card: string[];
}

export interface CardType {
    cardId: string;
    title: string;
    description: string;
    dateCreated: string;
    dateEnd: string;
    priority: "High" | "Medium" | "Low";
    status: "Not Started" | "Working" | "Delayed" | "On Hold";
}
