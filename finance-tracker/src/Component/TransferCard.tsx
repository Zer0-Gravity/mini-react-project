import { Trash } from "lucide-react";
import type { TransferProps } from "../type";
import { useFinanceTrack } from "../Store";

interface CardProps {
    data: TransferProps;
}

function TransferCard({ data }: CardProps) {
    const { delTransfer } = useFinanceTrack();

    return (
        <div className="w-full bg-secondary p-4 flex flex-col rounded-lg">
            <p className="text-[14px] font-light italic mb-2">
                {`Transaction date : ${data.date}`}
            </p>
            <div className="flex ">
                <div className="w-90 mr-5 grid grid-cols-[80px_auto]">
                    <span className="font-medium">Name</span>{" "}
                    <span className="font-light">: {data.name}</span>
                    <span className="font-medium">Amount</span>{" "}
                    <span>: {data.amount}</span>
                    <span className="font-medium">Address</span>
                    <span>: {data.address}</span>
                    <span className="font-medium">Email</span>
                    <span>: {data.email}</span>
                    <p
                        className={`mt-5 border p-2 text-center rounded-sm w-20 font-medium ${data.type === "Received" ? "text-green-400" : "text-red-400"}`}
                    >
                        {data.type}
                    </p>
                </div>
                <div className="space-y-2 flex-1">
                    <div className="w-40 h-20 border rounded-lg border-primary grid place-items-center">
                        <h1 className="text-xl font-medium">{data.source}</h1>
                    </div>
                </div>
                <button
                    className="flex justify-end"
                    onClick={() => delTransfer(data.id)}
                >
                    <Trash />
                </button>
            </div>
        </div>
    );
}

export default TransferCard;
