import { useFinanceTrack } from "./Store";
import type { GoalProps, TransactionProps } from "./type";

export const progressBar = (goalArr: GoalProps) => {
    if (!goalArr) return;

    const current = goalArr.currentAmount ?? 0;
    const total = goalArr.goalAmount ?? 1; //Avoid division by zero
    const percentage = (current / total) * 100;

    //Clamp the value from 0 to 100
    const clamp = Math.min(Math.max(percentage, 0), 100);

    //Round the decimal number
    return Math.round(clamp);
};

//Calculate total expense or income
export const totalAmount = (
    itemArray: TransactionProps[],
    type: string,
): string => {
    const total = itemArray
        .reduce((sum, item) => {
            return item.type === type ? sum + item.amount : sum; // Check if item.type === 'income' or 'expense' then total the amount
        }, 0)
        .toFixed(2);

    return total; //Convert string into number
};

//Calculate total balance
export const useBalance = () => {
    const balance = 100; //Base value for balance
    const { transactions } = useFinanceTrack();

    //Convert string to number
    const income = parseFloat(totalAmount(transactions, "income")); //Call the total amount function
    const expense = parseFloat(totalAmount(transactions, "expense"));

    return (balance + income - expense).toFixed(2); //CAlculate total balance
};
