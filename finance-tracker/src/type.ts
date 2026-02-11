export type TransactionType =
    | "income"
    | "expense"
    | "transfer-in"
    | "transfer-out";

export interface TransactionProps {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: TransactionType;
}
