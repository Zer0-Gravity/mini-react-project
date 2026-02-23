import { CirclePlus } from "lucide-react";
import React, { useState } from "react";
import type { TransactionType } from "../type";
import { useFinanceTrack, useWarning } from "../Store";
import InputForm from "./InputForm";
import InputFormHeader from "./InputFormHeader";
import { useNavigate } from "react-router";
import { formatDate, useHandleModal } from "../utility";
import WarningWIndow from "./WarningWIndow";

function TransactionWindow() {
    const { addTransactions } = useFinanceTrack(); //Import the global state from the zustand
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [transType, setTransType] = useState<TransactionType>("income");
    const [date, setDate] = useState<string>(
        new Date().toISOString().split("T")[0],
    ); //Set default input to today
    const navigate = useNavigate();
    const validate = useHandleModal();
    const { warning, message } = useWarning();

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

        if (!validate(description, amount)) return;
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
            <InputFormHeader text="Add Transaction" />

            {warning === true && <WarningWIndow text={message} />}
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
