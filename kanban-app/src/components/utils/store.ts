import { create } from "zustand";
import type { BoardType, CardType, ProjectType } from "./types";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface PopOverState {
    activePop: string;
    isPop: (itemPop: string) => void;
}

export const usePopOver = create<PopOverState>((set) => ({
    activePop: "",
    isPop: (itemPop) => set({ activePop: itemPop }),
}));

interface ProjectState {
    projects: Record<string, ProjectType>;
    boards: Record<string, BoardType>;
    cards: Record<string, CardType>;

    //Add Function
    addProjects: (newProject: ProjectType) => void;
}

export const useProjectData = create<ProjectState>()(
    persist(
        immer((set) => ({
            projects: {
                p1: {
                    projectId: "p1",
                    projectName: "Project Example 1",
                    board: [],
                },
                p2: {
                    projectId: "p2",
                    projectName: "Project Example 2",
                    board: [],
                },
            },
            boards: {},
            cards: {},

            //Add Function
            addProjects: (newProject: ProjectType) =>
                set((state) => {
                    state.projects[newProject.projectId] = newProject;
                }),
        })),
        { name: "kanban-storage" },
    ),
);
