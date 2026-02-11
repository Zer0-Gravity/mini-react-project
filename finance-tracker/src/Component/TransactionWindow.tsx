import { CirclePlus, CircleX } from "lucide-react";
import { useNavigate } from "react-router";

function TransactionWindow() {
    const navigate = useNavigate();

    //Navigate to previous page
    const previousPage = () => {
        navigate(-1);
    };

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <section className="flex justify-between mb-10">
                <h1 className="text-2xl font-bold text-secondary">
                    Add Transaction
                </h1>
                <button onClick={previousPage}>
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
                    />
                </div>

                {/* Transaction Amount */}
                <div>
                    <h1 className="text-[14px] font-medium text-secondary">
                        Amount
                    </h1>
                    <input
                        type="number"
                        className="p-2 bg-secondary rounded-lg w-full outline-none"
                    />
                </div>

                {/* Transaction Type */}
                <div className="space-y-2">
                    <h1 className="text-[14px] font-medium text-secondary">
                        Transaction Type
                    </h1>
                    <div className="flex gap-2">
                        <TransactionType value={"income"} text={"Income"} />
                        <TransactionType value={"expense"} text={"Expense"} />
                    </div>
                </div>

                <button className="bg-secondary p-2 rounded-lg font-medium text-primary items-center flex  justify-center gap-2">
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
}

function TransactionType({ value, text }: TransactionOption) {
    return (
        <label className="border border-secondary p-2 rounded-lg has-checked:bg-secondary">
            <input
                type="radio"
                value={value}
                name="transaction-type"
                className="peer hidden"
            />
            <span className="text-secondary font-medium peer-checked:text-primary">
                {text}
            </span>
        </label>
    );
}

export default TransactionWindow;
