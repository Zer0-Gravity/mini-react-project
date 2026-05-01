import { create } from "zustand";
import type {
    BoardType,
    CardType,
    ModalType,
    PopOverState,
    ProjectState,
    ProjectType,
} from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const usePopOver = create<PopOverState>((set) => ({
    activePop: null,
    isPop: (itemPop) => set({ activePop: itemPop }),
}));

export const useModal = create<ModalType>((set) => ({
    modal: null,
    targetId: null,
    targetType: null,
    openModal: (type, id, target) =>
        set({ modal: type, targetId: id, targetType: target }),
    closeModal: () => set({ modal: null, targetId: null, targetType: null }),
}));

export const useProjectData = create<ProjectState>()(
    persist(
        immer((set) => ({
            projects: {
                PJYubTv: {
                    projectId: "PJYubTv",
                    projectName: "Project Example 1",
                    board: ["BDybXty"],
                },
                PJz9qRm: {
                    projectId: "PJz9qRm",
                    projectName: "Marketing Campaign",
                    board: ["BDv2wPk"],
                },
            },
            boards: {
                BDybXty: {
                    boardId: "BDybXty",
                    boardName: "Engineering Sprint",
                    card: ["CD12345"],
                },
                BDv2wPk: {
                    boardId: "BDv2wPk",
                    boardName: "Social Media Launch",
                    card: ["CD67890"],
                },
            },
            cards: {
                CD12345: {
                    cardId: "CD12345",
                    title: "Setup React Router",
                    description:
                        "Configure nested routes and outlets for the dashboard.",
                    dateCreated: "2023-10-01",
                    dateEnd: "2023-10-05",
                    priority: "High",
                    status: "Working",
                },
                CD67890: {
                    cardId: "CD67890",
                    title: "Design Instagram Assets",
                    description:
                        "Create 5 carousel templates for the product reveal.",
                    dateCreated: "2023-11-10",
                    dateEnd: "2023-11-15",
                    priority: "Medium",
                    status: "Not Started",
                },
            },

            //Add Function
            addProjects: (newProject: ProjectType) =>
                set((state) => {
                    state.projects[newProject.projectId] = newProject;
                }),

            addBoards: (projectId: string, newBoard: BoardType) =>
                set((state) => {
                    //Add new board to the board array
                    state.boards[newBoard.boardId] = newBoard;
                    //Push it to the main array
                    state.projects[projectId].board.push(newBoard.boardId);
                }),

            addCards: (boardId: string, newCard: CardType) =>
                set((state) => {
                    state.cards[newCard.cardId] = newCard;
                    state.boards[boardId].card.push(newCard.cardId);
                }),

            //Rename Function
            editProjects: (projectId: string, newName: string) =>
                set((state) => {
                    state.projects[projectId].projectName = newName;
                }),
            editBoards: (boardId: string, newName: string) =>
                set((state) => {
                    state.boards[boardId].boardName = newName;
                }),

            editCards: (cardId: string, newName: string) =>
                set((state) => {
                    state.cards[cardId].title = newName;
                }),

            //Delete Function
            deleteProjects: (projectId: string) =>
                set((state) => {
                    //Find the project data
                    const project = state.projects[projectId];
                    if (!project) return;

                    //Get the board data inside the project
                    project.board.forEach((boardId) => {
                        const board = state.boards[boardId];

                        if (board) {
                            //Get card data inside the board array
                            board.card.forEach((cardId) => {
                                //Delete card
                                delete state.cards[cardId];
                            });
                        }
                        //Delete board
                        delete state.boards[boardId];
                    });
                    //Delete project
                    delete state.projects[projectId];
                }),

            deleteBoard: (boardId: string) =>
                set((state) => {
                    //Find the parent id
                    const projectParent = Object.keys(state.projects).find(
                        (pId) => state.projects[pId].board.includes(boardId),
                    );

                    //Check parent id
                    if (projectParent) {
                        state.projects[projectParent].board = state.projects[
                            projectParent
                        ].board.filter((id) => id !== boardId);
                    }

                    delete state.boards[boardId];
                }),
            deleteCard: (cardId: string) =>
                set((state) => {
                    const boardParent = Object.keys(state.boards).find((bId) =>
                        state.boards[bId].card.includes(cardId),
                    );

                    if (boardParent) {
                        state.boards[boardParent].card = state.boards[
                            boardParent
                        ].card.filter((id) => id !== cardId);
                    }
                }),
        })),
        { name: "kanban-storage" },
    ),
);
