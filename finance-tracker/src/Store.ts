import { create } from "zustand";
import type { TransactionType } from "./type";
import { persist } from "zustand/middleware";

interface TransactionProps {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: TransactionType;
}

interface GoalProps {
    goalId: string;
    title: string;
    description: string;
    goalAmount: number;
    currentAmount?: number;
    favorite: boolean;
}

interface FundsProps {
    fundId: string;
    goalId: string | undefined;
    date: string;
    amount: number;
}

interface FinanceTracker {
    transactions: TransactionProps[];
    goals: GoalProps[];
    funds: FundsProps[];
    addTransactions: (transaction: TransactionProps) => void;
    delTransactions: (index: string) => void;
    addGoals: (goal: GoalProps) => void;
    delGoals: (index: string) => void;
    updateGoals: (updatedGoal: GoalProps) => void;
    toggleGoal: (index: string) => void;
    addFunds: (fund: FundsProps) => void;
    delFunds: (index: string) => void;
}

export const useFinanceTrack = create<FinanceTracker>()(
    persist(
        (set) => ({
            transactions: [], // Transaction card
            goals: [],
            funds: [],
            //Add new transaction
            addTransactions: (transaction) =>
                set((state) => ({
                    transactions: [...state.transactions, transaction],
                })),
            //Delete chosen transaction
            delTransactions: (index) =>
                set((state) => ({
                    transactions: state.transactions.filter(
                        (item) => item.id !== index,
                    ),
                })),

            //Add Goals
            addGoals: (goal) =>
                set((state) => ({ goals: [...state.goals, goal] })),

            //Update goals
            updateGoals: (updatedGoal) =>
                set((state) => ({
                    goals: state.goals.map((goal) =>
                        goal.goalId === updatedGoal.goalId ? updatedGoal : goal,
                    ),
                })),

            //Del Goals
            delGoals: (index) =>
                set((state) => ({
                    goals: state.goals.filter((item) => index !== item.goalId),
                })),
            //Toggle favorite for the button
            toggleGoal: (index) =>
                set((state) => ({
                    goals: state.goals.map((goal) =>
                        goal.goalId === index //Check if the current array id matched with chosen index
                            ? { ...goal, favorite: !goal.favorite } //Toggle the favorite to true or false
                            : goal,
                    ),
                })),

            //Add current fund for the goal
            addFunds: (fund) =>
                set((state) => ({ funds: [...state.funds, fund] })),
            delFunds: (index) =>
                set((state) => ({
                    funds: state.funds.filter((item) => index !== item.fundId),
                })),
        }),
        { name: "tracker-storage" },
    ),
);
