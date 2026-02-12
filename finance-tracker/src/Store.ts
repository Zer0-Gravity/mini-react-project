import { create } from "zustand";
import type { TransactionType } from "./type";

interface TransactionProps {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: TransactionType;
}

interface FinanceTracker {
    balance: number;
    transactions: TransactionProps[];
    addTransactions: (transaction: TransactionProps) => void;
    delTransactions: (index: string) => void;
}

export const useFinanceTrack = create<FinanceTracker>((set) => ({
    balance: 0, // Main balance
    transactions: [], // Transaction card
    addTransactions: (transaction) =>
        set((state) => ({
            transactions: [...state.transactions, transaction],
        })),
    delTransactions: (index) =>
        set((state) => ({
            transactions: state.transactions.filter(
                (item) => item.id !== index,
            ),
        })),
}));
