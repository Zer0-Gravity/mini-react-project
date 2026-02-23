import { create } from "zustand";
import type {
    FundsProps,
    GoalProps,
    TransactionProps,
    TransferProps,
    Warning,
} from "./type";
import { persist } from "zustand/middleware";

interface FinanceTracker {
    transactions: TransactionProps[];
    goals: GoalProps[];
    funds: FundsProps[];
    transfers: TransferProps[];
    addTransactions: (transaction: TransactionProps) => void;
    delTransactions: (index: string) => void;
    addGoals: (goal: GoalProps) => void;
    delGoals: (index: string) => void;
    updateGoals: (updatedGoal: GoalProps) => void;
    toggleGoal: (index: string) => void;
    addFunds: (fund: FundsProps) => void;
    delFunds: (index: string) => void;
    addTransfer: (transfer: TransferProps) => void;
    delTransfer: (index: string) => void;
}

export const useFinanceTrack = create<FinanceTracker>()(
    persist(
        (set) => ({
            transactions: [], // Transaction card
            goals: [],
            funds: [],
            transfers: [],
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
            //Add transfer
            addTransfer: (transfer) =>
                set((state) => ({ transfers: [...state.transfers, transfer] })),
            delTransfer: (index) =>
                set((state) => ({
                    transfers: state.transfers.filter(
                        (item) => index !== item.id,
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

export const useWarning = create<Warning>((set) => ({
    warning: false,
    message: "",
    setWarning: (warn) => set({ warning: warn }),
    setMessage: (text) => set({ message: text }),
}));
