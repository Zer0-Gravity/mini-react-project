import { Star } from "lucide-react";

function GoalCard() {
    return (
        <div className="bg-secondary min-w-50 p-2 rounded-lg space-y-1">
            <div className="flex justify-between">
                <h1 className="font-medium">Buy gaming pc</h1>
                <Star size={18} />
            </div>
            <p className="italic text-[14px] font-light">$450.00 / $1,500.00</p>
            <div className="w-full h-2 bg-white rounded-full">
                <div className="h-2 bg-primary rounded-full w-25"></div>
            </div>
        </div>
    );
}

export default GoalCard;
