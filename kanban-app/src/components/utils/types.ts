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

export type PriorityType = "High" | "Medium" | "Low";
export type StatusType = "Not Started" | "Working" | "Delayed" | "On Hold";

export interface CardType {
    cardId: string;
    title: string;
    description: string;
    dateCreated: string;
    dateEnd: string;
    priority: PriorityType;
    status: StatusType;
}

//Store type

export interface ProjectState {
    projects: Record<string, ProjectType>;
    boards: Record<string, BoardType>;
    cards: Record<string, CardType>;

    //Add Function
    addProjects: (newProject: ProjectType) => void;
    addBoards: (projectId: string, newBoard: BoardType) => void;
    addCards: (boardId: string, newCard: CardType) => void;

    editProjects: (projectId: string, newName: string) => void;
    editBoards: (boardId: string, newName: string) => void;
    editCards: (cardId: string, newName: string) => void;

    deleteProjects: (projectId: string) => void;
    deleteBoard: (boardId: string) => void;
    deleteCard: (cardId: string) => void;
}

export interface PopOverState {
    activePop: string;
    isPop: (itemPop: string) => void;
}

export type TargetType = "project" | "board" | "card";

export interface ModalType {
    modal: "delete" | "rename" | "addBoard" | "addCard" | null;
    targetId: string | null;
    targetType: TargetType | null;
    openModal: (
        type: "rename" | "delete" | "addBoard" | "addCard",
        id?: string,
        targetType?: TargetType,
    ) => void;
    closeModal: () => void;
}
