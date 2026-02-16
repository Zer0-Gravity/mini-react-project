import React, { useState } from "react";
import InputForm from "./InputForm";
import InputFormHeader from "./InputFormHeader";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { useFinanceTrack } from "../Store";

function FunForm() {
    const [fund, setFund] = useState<number>(0);
    const navigate = useNavigate();
    const { addFunds } = useFinanceTrack();

    const handleFund = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFund(+e.target.value);
    };

    const handleTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFund(+e.target.value);
    };
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
    const handleNewFunds = () => {
        const newFund = {
            fundId: crypto.randomUUID(),
            date: formatDate(new Date()),
            amount: fund,
        };

        addFunds(newFund);
        navigate(-1);
    };

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <InputFormHeader text="Add Fund" />

            <section className="space-y-4">
                <InputForm
                    text="Fund Amount"
                    inputType="number"
                    value={fund}
                    onChange={handleFund}
                />
                <div className="flex justify-between">
                    <InputMoney text="0" value={0} onChange={handleTemplate} />
                    <InputMoney
                        text="10"
                        value={10}
                        onChange={handleTemplate}
                    />
                    <InputMoney
                        text="20"
                        value={20}
                        onChange={handleTemplate}
                    />
                    <InputMoney
                        text="25"
                        value={25}
                        onChange={handleTemplate}
                    />
                    <InputMoney
                        text="50"
                        value={50}
                        onChange={handleTemplate}
                    />
                    <InputMoney
                        text="100"
                        value={100}
                        onChange={handleTemplate}
                    />
                </div>
                <button
                    className="w-full flex items-center justify-center bg-secondary p-2 rounded-lg"
                    onClick={handleNewFunds}
                >
                    <PlusCircle size={18} />
                    <span>Add Fund</span>
                </button>
            </section>
        </main>
    );
}

interface InputFormProps {
    value: number;
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputMoney({ value, text, onChange }: InputFormProps) {
    return (
        <label className="border border-secondary py-2 px-5 rounded-lg has-checked:bg-secondary">
            <input
                type="radio"
                name="option"
                className="peer hidden"
                value={value}
                onChange={onChange}
            />
            <span className="text-secondary peer-checked:text-primary">
                ${text}
            </span>
        </label>
    );
}

export default FunForm;
