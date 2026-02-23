import { useFinanceTrack, useWarning } from "./Store";
import type { GoalProps, TransactionProps, TransferProps } from "./type";

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
    itemArray: TransactionProps[] | TransferProps[],
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
    const { transactions, transfers } = useFinanceTrack();

    //Convert string to number
    const income =
        parseFloat(totalAmount(transactions, "income")) +
        parseFloat(totalAmount(transfers, "received")); //Call the total amount function
    const expense =
        parseFloat(totalAmount(transactions, "expense")) +
        parseFloat(totalAmount(transfers, "sended"));

    return (balance + income - expense).toFixed(2); //CAlculate total balance
};

//Handle modal behavior
export const useHandleModal = () => {
    const { setMessage, setWarning } = useWarning();

    const validate = (title: string, amount: number) => {
        const error: string[] = []; //Array fpr error string

        //Check if the title and amount empty
        if (!title.trim()) error.push("Title");
        if (!amount || amount === 0) error.push("Amount");

        if (error.length > 0) {
            setMessage(error.join(" & ") + " can't be empty"); //Join array separated with "&"
            setWarning(true); //set warning to true
            return false;
        }

        return true;
    };

    return validate;
};

export const formatDate = (date: string | Date) => {
    const dateObj = new Date(date); //Get the date input from user

    //Format date render
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return `${formattedDate}`; //Return formatted date
};
