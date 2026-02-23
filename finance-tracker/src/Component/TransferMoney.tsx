import React, { useState } from "react";
import InputForm from "./InputForm";
import InputFormHeader from "./InputFormHeader";
import { useFinanceTrack } from "../Store";
import type { TransferProps } from "../type";
import { useNavigate } from "react-router";
import { formatDate } from "../utility";

interface TransferForm {
    value: string;
    type: string;
}

function TransferMoney({ value, type }: TransferForm) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [source, setSource] = useState<string>("");

    const { addTransfer } = useFinanceTrack();
    const navigate = useNavigate();

    //Handle adding new transfer array
    const addNewTransfer = () => {
        const newTransfer: TransferProps = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            address: address,
            date: formatDate(new Date()),
            amount: amount,
            source: source,
            type: type,
            layoutCard: "TRANSFER",
        };

        addTransfer(newTransfer);
        navigate(-1);
    };

    //Handle functions for change event
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddress(e.target.value);
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAmount(Number(e.target.value));
    const handleSource = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSource(e.target.value);

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <InputFormHeader text={value} />

            <section className="space-y-3">
                {/* Full Name */}
                <InputForm
                    text="Full Name"
                    inputType="text"
                    value={name}
                    onChange={handleName}
                />
                {/* Email */}
                <InputForm
                    text="Email"
                    inputType="text"
                    value={email}
                    onChange={handleEmail}
                />
                {/* Wallet Address */}
                <InputForm
                    text="Address"
                    inputType="text"
                    value={address}
                    onChange={handleAddress}
                />
                {/* Amount */}
                <InputForm
                    text="Amount"
                    inputType="text"
                    value={amount}
                    onChange={handleAmount}
                />
                {/* Bank, Debit Card, Digital Card */}
                <div className="space-y-3">
                    <h1 className="text-secondary text-[14px] font-medium">
                        Source
                    </h1>
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <SourceOption
                                text="Bank"
                                sourceVal="Bank"
                                value={source}
                                onChange={handleSource}
                            />
                            <SourceOption
                                text="Digital Card"
                                sourceVal="Digital Card"
                                value={source}
                                onChange={handleSource}
                            />
                            <SourceOption
                                text="Debit Card"
                                sourceVal="Debit Card"
                                value={source}
                                onChange={handleSource}
                            />
                        </div>
                        <button
                            onClick={addNewTransfer}
                            className="bg-secondary flex gap-2 items-center w-40 p-2 justify-center font-medium rounded-lg"
                        >
                            {value}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

interface SourceOption {
    sourceVal: string;
    value: string;
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SourceOption({ sourceVal, value, text, onChange }: SourceOption) {
    return (
        <label className="border border-secondary rounded-lg py-2 px-3 has-checked:bg-secondary">
            <input
                type="radio"
                name="option"
                value={sourceVal}
                checked={value === sourceVal}
                className="peer hidden"
                onChange={onChange}
            />
            <span className="text-secondary peer-checked:text-primary">
                {text}
            </span>
        </label>
    );
}

export default TransferMoney;
