import TrackerCard from "../Component/TrackerCard";
import { useState } from "react";
import type { SingleValue } from "react-select";
import ReactSelect from "react-select";
import ButtonAdd from "../Component/Home/ButtonAdd";
import { CircleDollarSign, ShoppingBag } from "lucide-react";
import { useFinanceTrack } from "../Store";

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

    const { transactions } = useFinanceTrack();

    const handleChange = (newValue: SingleValue<TransactionType>) => {
        setSelectedOption(newValue);
    };

    return (
        <div className="container-custom space-y-3">
            <h1 className="font-bold text-[25px] text-secondary">
                Transaction List
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
                        className="text-black w-40"
                    />
                </div>
            </section>
            <section className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <CircleDollarSign size={20} color="red" />
                    <h1 className="font-bold text-red-500">
                        Total Expense :
                        {/* Count the total expense */}
                        {transactions
                            .reduce((acc, item) => {
                                return acc + item.amount;
                            }, 0)
                            .toFixed(2)}
                    </h1>
                </div>
                <div className="flex gap-5">
                    <ButtonAdd
                        icon={ShoppingBag}
                        text="Add Transaction"
                        navigate="/transaction-window"
                    />
                </div>
            </section>
            <section>
                {transactions.length !== 0 ? (
                    <TrackerCard rounded={false} data={transactions} />
                ) : (
                    <h1>No transaction listed currently</h1>
                )}
            </section>
        </div>
    );
}

export default History;
