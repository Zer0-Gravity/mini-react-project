import TrackerCard from "../Component/TrackerCard";
import { useState } from "react";
import type { SingleValue } from "react-select";
import ReactSelect from "react-select";

interface TransactionType {
    value: string;
    label: string;
}

function History() {
    const [selectedOption, setSelectedOption] =
        useState<TransactionType | null>(null);
    const options: TransactionType[] = [
        { value: "income", label: "Income" },
        { value: "Expense", label: "Expense" },
    ];

    const handleChange = (newValue: SingleValue<TransactionType>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className="container-custom space-y-3">
            <h1 className="font-bold text-[25px] text-secondary">
                History Transaction
            </h1>
            <section className="flex justify-between">
                <input
                    type="search"
                    placeholder="Search Transaction"
                    className="bg-secondary rounded-lg px-2 text-[14px] outline-none"
                />
                <div className="flex text-secondary items-center gap-3">
                    <h1>Filter</h1>
                    <ReactSelect<TransactionType>
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                        className="text-black w-40 "
                    />
                </div>
            </section>
            <section className="space-y-1">
                <TrackerCard />
                <TrackerCard />
                <TrackerCard />
            </section>
        </div>
    );
}

export default History;
