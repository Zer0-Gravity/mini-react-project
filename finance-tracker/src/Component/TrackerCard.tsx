import { MoveDownLeft, MoveUpRight, Trash } from "lucide-react";
import type { TransactionProps } from "../type";
import { useFinanceTrack } from "../Store";

interface TrackerProps {
    rounded: boolean;
    data: TransactionProps;
}

function TrackerCard({ rounded, data }: TrackerProps) {
    const { delTransactions } = useFinanceTrack();

    return (
        <div
            className={`text-white flex justify-between p-2 min-h-17 bg-secondary items-center ${rounded ? "rounded-lg" : "rounded-none"}`}
        >
            <div className="flex gap-3 items-center w-65">
                <div
                    className={`border w-10 h-10 flex items-center justify-center rounded-full ${data.type === "income" ? "text-green-400" : "text-red-400"}`}
                >
                    {data.type === "expense" ? (
                        <MoveUpRight />
                    ) : (
                        <MoveDownLeft />
                    )}
                </div>
                <div className="text-primary">
                    <h1 className="font-bold">{data.description}</h1>
                    <p className="text-[14px] italic">{data.date}</p>
                </div>
            </div>

            <div className="flex gap-3 text-primary items-center">
                <p
                    className={`border-2 px-2 py-1 w-20 text-center rounded-sm  font-medium ${data.type === "income" ? "text-green-400" : "text-red-400"}`}
                >
                    {data.type}
                </p>
                <h1 className="font-bold text-[18px] w-30 text-center">
                    ${data.amount.toFixed(2)}
                </h1>
                <button onClick={() => delTransactions(data.id)}>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    );
}

export default TrackerCard;
