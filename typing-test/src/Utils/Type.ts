export interface MockData {
    easy: LevelEntries[];
    medium: LevelEntries[];
    hard: LevelEntries[];
}

export interface LevelEntries {
    id: string;
    text: string;
}

export type DifficultyLevels = "easy" | "medium" | "hard";
export type Mode = "timed" | "passage";

export interface StatusProps {
    wpm: number;
    accuracy: number;
}
