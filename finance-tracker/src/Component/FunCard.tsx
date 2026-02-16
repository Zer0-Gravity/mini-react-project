import { Trash } from "lucide-react";

function FunCard() {
    return (
        <div className="w-full h-10 flex items-center justify-between p-2">
            <div className="flex gap-7">
                <h1 className="text-primary font-medium border-r-2 px-2 w-30">
                    $340.00
                </h1>
                <h1 className="text-primary font-medium border-r-2 w-35">
                    Mon, 67,232
                </h1>
            </div>
            <Trash size={18} fill="red" stroke="red" />
        </div>
    );
}

export default FunCard;
