import { create } from "zustand";
import type {
    BoardType,
    ModalType,
    PopOverState,
    ProjectState,
    ProjectType,
} from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const usePopOver = create<PopOverState>((set) => ({
    activePop: "",
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
            },
            boards: {},
            cards: {},

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
        })),
        { name: "kanban-storage" },
    ),
);
