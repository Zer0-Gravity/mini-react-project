import { CirclePlus, CircleX } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { TransactionType } from "../type";
import { useFinanceTrack } from "../Store";
import InputForm from "./InputForm";

function TransactionWindow() {
    const { addTransactions } = useFinanceTrack(); //Import the global state from the zustand
    const navigate = useNavigate();
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [transType, setTransType] = useState<TransactionType>("income");
    const [date, setDate] = useState<string>(
        new Date().toISOString().split("T")[0],
    ); //Set default input to today

    const formatDate = (date: string | Date) => {
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

    //Navigate to previous page
    const previousPage = () => {
        navigate(-1);
    };

    //Handle on change target for transaction type
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransType(e.target.value as TransactionType);
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

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value);
    };

    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
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
                <InputForm
                    text="Description"
                    value={description}
                    inputType="text"
                    onChange={handleDescription}
                />

                {/* Transaction Amount */}
                <InputForm
                    text="Amount"
                    value={amount}
                    inputType="number"
                    onChange={handleAmount}
                />

                {/* Transaction date */}
                <InputForm
                    text="Date"
                    value={date}
                    inputType="date"
                    onChange={handleDate}
                />

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
