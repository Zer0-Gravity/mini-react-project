import { create } from "zustand";

interface TransactionProps {
    id: string;
    title: string;
    amount: number;
    date: string;
    type: TransactionType;
}

type TransactionType = "income" | "expense" | "transfer-in" | "transfer-out";

interface FinanceTracker {
    balance: number;
    transactions: TransactionProps[];
    addTransactions: (transaction: TransactionProps) => void;
}

export const financeTrack = create<FinanceTracker>((set) => ({
    balance: 0, // Main balance
    transactions: [], // Transaction card
    addTransactions: (transaction) =>
        set((state) => ({
            transactions: [...state.transactions, transaction],
        })),
}));
