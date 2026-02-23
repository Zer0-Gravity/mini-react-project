import TrackerCard from "../Component/TrackerCard";
import { useState } from "react";
import type { SingleValue } from "react-select";
import ReactSelect from "react-select";
import ButtonAdd from "../Component/Home/ButtonAdd";
import { ShoppingBag } from "lucide-react";
import { useFinanceTrack } from "../Store";
import { totalAmount } from "../utility";

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

    //Filter array by search input
    const filteredItems = transactions.filter((item) => {
        const filterSearch = item.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return filterSearch;
    });

    return (
        <div className="container-custom ">
            <h1 className="font-bold text-[25px] text-secondary">
                Transaction List
            </h1>
            <section className="flex justify-between">
                <input
                    type="search"
                    placeholder="Search Transaction"
                    className="search-query"
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
            <section className="flex justify-between items-center">
                <div className="flex gap-2 items-center bg-secondary px-5 py-1 rounded-full w-90 justify-between">
                    <h1 className="font-bold text-red-500">
                        {`Expense : $ ${totalAmount(transactions, "expense")}`}
                    </h1>
                    <h1 className="font-bold text-green-500">
                        {`Income : $ ${totalAmount(transactions, "income")}`}
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
                    <h1 className="text-secondary text-center font-medium">
                        No transaction listed currently
                    </h1>
                )}
            </section>
        </div>
    );
}

export default History;
