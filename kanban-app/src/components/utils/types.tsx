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

//Store type

export interface ProjectState {
    projects: Record<string, ProjectType>;
    boards: Record<string, BoardType>;
    cards: Record<string, CardType>;

    //Add Function
    addProjects: (newProject: ProjectType) => void;
    addBoards: (projectId: string, newBoard: BoardType) => void;

    editProjects: (projectId: string, newName: string) => void;
    deleteProjects: (projectId: string) => void;
}

export interface PopOverState {
    activePop: string;
    isPop: (itemPop: string) => void;
}

export type TargetType = "project" | "board" | "card";

export interface ModalType {
    modal: "delete" | "rename" | null;
    targetId: string | null;
    targetType: TargetType | null;
    openModal: (
        type: "rename" | "delete",
        id: string,
        targetType: TargetType,
    ) => void;
    closeModal: () => void;
}
