import TrackerCard from "../Component/TrackerCard";
import { useState } from "react";
import type { SingleValue } from "react-select";
import ReactSelect from "react-select";
import ButtonAdd from "../Component/Home/ButtonAdd";
import { CircleDollarSign, ShoppingBag } from "lucide-react";
import { useFinanceTrack } from "../Store";
import type { TransactionProps } from "../type";

interface FilterType {
    value: string;
    label: string;
}

function History() {
    const [selectedOption, setSelectedOption] = useState<FilterType | null>(
        null,
    );
    const options: FilterType[] = [
        { value: "income", label: "Income" },
        { value: "Expense", label: "Expense" },
    ];
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { transactions } = useFinanceTrack();

    const handleChange = (newValue: SingleValue<FilterType>) => {
        setSelectedOption(newValue);
    };

    //Sum total expense or income
    const totalAmount = (
        itemArray: TransactionProps[],
        type: string,
    ): string => {
        const total = itemArray
            .reduce((sum, item) => {
                return item.type === type ? sum + item.amount : sum; // Check if item.type === 'income' or 'expense' then total the amount
            }, 0)
            .toFixed(2);

        return total;
    };

    //Logic for filtered search
    const filteredItems = transactions.filter((item) => {
        const filterSearch = item.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return filterSearch;
    });

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
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex text-secondary items-center gap-3">
                    <h1>Filter</h1>
                    <ReactSelect<FilterType>
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
                        Expense :{/* Count the total expense */}
                        {totalAmount(transactions, "expense")}
                    </h1>
                    <h1 className="font-bold text-green-500">
                        Income :{/* Count the total expense */}
                        {totalAmount(transactions, "income")}
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
                {filteredItems.length !== 0 ? (
                    filteredItems.map((transaction) => (
                        <TrackerCard rounded={false} data={transaction} />
                    ))
                ) : (
                    <h1>No transaction listed currently</h1>
                )}
            </section>
        </div>
    );
}

export default History;
