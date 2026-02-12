import { CirclePlus, CircleX } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { TransactionType } from "../type";
import { useFinanceTrack } from "../Store";

function TransactionWindow() {
    const { addTransactions } = useFinanceTrack(); //Import the global state from the zustand
    const navigate = useNavigate();
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<string>("");
    const [transType, setTransType] = useState<TransactionType>("income");

    //Navigate to previous page
    const previousPage = () => {
        navigate(-1);
    };

    //Handle on change target for transaction type
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransType(e.target.value as TransactionType);
    };

    const formatDate = (date: string) => {
        const dateObj = new Date(date);

        const formattedDate = dateObj.toLocaleDateString("en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        return `${formattedDate}`;
    };

    const addNewTransaction = () => {
        const newTransaction = {
            id: crypto.randomUUID(), //Get random ID from crypto
            description: description,
            amount: amount,
            date: formatDate(date),
            type: transType,
        };

        if (!description && !amount) {
            return;
        }

        addTransactions(newTransaction); //Add transaction record
        navigate(-1); //Immediately go back 1 page
    };

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <section className="flex justify-between mb-10">
                <h1 className="text-2xl font-bold text-secondary">
                    Add Transaction
                </h1>
                <button onClick={previousPage}>
                    {/*Close page when button clicked*/}
                    <CircleX className="text-secondary" size={20} />
                </button>
            </section>

            <section className="flex flex-col gap-5">
                {/* Transaction description */}
                <div className="space-y-1">
                    <h1 className="text-[14px] font-medium text-secondary">
                        Description
                    </h1>
                    <input
                        type="text"
                        className="p-2 bg-secondary rounded-lg w-full outline-none"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Transaction Amount */}
                <div>
                    <div>
                        <h1 className="text-[14px] font-medium text-secondary">
                            Amount
                        </h1>
                        <input
                            type="number"
                            className="p-2 bg-secondary rounded-lg w-full outline-none"
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* Transaction date */}
                <div>
                    <h1 className="text-[14px] font-medium text-secondary">
                        Date
                    </h1>
                    <input
                        type="date"
                        className="p-2 bg-secondary rounded-lg w-full outline-none"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Transaction Type */}
                <div className="space-y-2">
                    <h1 className="text-[14px] font-medium text-secondary">
                        Transaction Type
                    </h1>
                    <div className="flex gap-2">
                        {/* Pass the necessary data for the radio component */}
                        <InputOption
                            value={"income"}
                            text={"Income"}
                            onValue={transType}
                            onChange={handleTypeChange}
                        />
                        <InputOption
                            value={"expense"}
                            text={"Expense"}
                            onValue={transType}
                            onChange={handleTypeChange}
                        />
                    </div>
                </div>

                <button
                    className="bg-secondary p-2 rounded-lg font-medium text-primary items-center flex  justify-center gap-2"
                    onClick={addNewTransaction}
                >
                    <CirclePlus size={20} />
                    Add Transaction
                </button>
            </section>
        </main>
    );
}

interface TransactionOption {
    value: string;
    text: string;
    onValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputOption({ value, text, onValue, onChange }: TransactionOption) {
    return (
        <label className="border border-secondary p-2 rounded-lg has-checked:bg-secondary">
            <input
                type="radio"
                value={value}
                checked={value === onValue}
                name="transaction-type"
                className="peer hidden"
                onChange={onChange}
            />
            <span className="text-secondary font-medium peer-checked:text-primary">
                {text}
            </span>
        </label>
    );
}

export default TransactionWindow;
