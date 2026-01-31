import { MoveUpRight, Trash } from "lucide-react";

function TrackerCard() {
    return (
        <div className="text-white border flex justify-between p-2">
            <div>
                <div>
                    <MoveUpRight />
                </div>
                <div>
                    <h1>Gift from grandma</h1>
                    <p>Today, 15.00PM</p>
                </div>
            </div>

            <div className="flex gap-5">
                <p>Income</p>
                <h1>$23.00</h1>
                <button>
                    <Trash />
                </button>
            </div>
        </div>
    );
}

export default TrackerCard;
