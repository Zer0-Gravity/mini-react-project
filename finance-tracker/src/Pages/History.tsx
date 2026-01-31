import { Filter } from "lucide-react";
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
        <div className="container-custom">
            <h1 className="font-bold text-[25px] text-secondary">
                History Transaction
            </h1>
            <section>
                <input type="search" placeholder="Search Transaction" />
                <div className="flex text-secondary">
                    <h1>
                        <Filter /> Filter
                    </h1>
                    <ReactSelect<TransactionType>
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
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
