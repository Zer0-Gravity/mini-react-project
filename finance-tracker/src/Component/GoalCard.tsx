import { Star, Trash } from "lucide-react";
import type { GoalProps } from "../type";
import { useFinanceTrack } from "../Store";
import { Link } from "react-router";
import { progressBar } from "../utility";

interface GoalCardProps {
    data: GoalProps;
}

function GoalCard({ data }: GoalCardProps) {
    const { toggleGoal, delGoals } = useFinanceTrack();

    return (
        <Link to={`/goal-detail/${data.goalId}`}>
            <div
                key={data.goalId}
                className="bg-secondary p-2 rounded-lg space-y-1"
            >
                <div className="flex justify-between">
                    <h1 className="font-medium">{data.title}</h1>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleGoal(data.goalId);
                        }}
                    >
                        <Star
                            size={18}
                            fill={`${data.favorite === true ? "#003049" : "none"}`}
                        />
                    </button>
                </div>
                <p className="italic text-[14px] font-light">
                    ${data.currentAmount?.toFixed(2)} / $
                    {data.goalAmount.toFixed(2)}
                </p>
                <div className="flex gap-10 items-center">
                    <div className="w-full h-2 bg-white rounded-full">
                        <div
                            className="h-2 bg-primary rounded-full"
                            style={{ width: `${progressBar(data)}%` }}
                        ></div>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            delGoals(data.goalId);
                        }}
                    >
                        <Trash size={18} fill="red" className="text-red-500" />
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default GoalCard;
