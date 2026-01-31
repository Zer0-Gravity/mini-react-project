import { MoveUpRight, Trash } from "lucide-react";

function TrackerCard() {
    return (
        <div className="text-white flex justify-between p-2 min-h-17 bg-secondary items-center rounded-lg">
            <div className="flex gap-5 items-center">
                <div className="border w-10 h-10 flex items-center justify-center rounded-full">
                    <MoveUpRight />
                </div>
                <div className="text-primary">
                    <h1 className="font-bold">Gift from grandma</h1>
                    <p className="text-[14px] italic">Today, 15.00PM</p>
                </div>
            </div>

            <div className="flex gap-10 text-primary items-center">
                <p className="border-2 px-2 py-1 rounded-sm text-green-400 font-medium">
                    Income
                </p>
                <h1 className="font-bold text-[18px]">$23.00</h1>
                <button>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    );
}

export default TrackerCard;
