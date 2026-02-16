import { Trash } from "lucide-react";
import type { FundsProps } from "../type";
import { useFinanceTrack } from "../Store";

interface CardProps {
    data: FundsProps;
}

function FunCard({ data }: CardProps) {
    const { delFunds } = useFinanceTrack();

    return (
        <div className="w-full h-10 flex items-center justify-between p-2">
            <div className="flex gap-7">
                <h1 className="text-primary font-medium border-r-2 px-2 w-30">
                    ${data.amount}
                </h1>
                <h1 className="text-primary font-medium border-r-2 w-35">
                    {data.date}
                </h1>
            </div>
            <button onClick={() => delFunds(data.fundId)}>
                {/* Delete card based on the id */}
                <Trash size={18} fill="red" stroke="red" />
            </button>
        </div>
    );
}

export default FunCard;
