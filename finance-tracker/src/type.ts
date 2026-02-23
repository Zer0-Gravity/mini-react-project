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

export interface GoalProps {
    goalId: string;
    title: string;
    description: string;
    goalAmount: number;
    currentAmount?: number;
    favorite: boolean;
}

export interface FundsProps {
    fundId: string;
    goalId: string | undefined;
    date: string;
    amount: number;
}

export interface TransferProps {
    id: string;
    name: string;
    email: string;
    address: string;
    amount: number;
    source: string;
    type: string;
    layoutCard: "TRANSFER";
}

export interface Warning {
    warning: boolean;
    message: string;
    setWarning: (warn: boolean) => void;
    setMessage: (text: string) => void;
}
