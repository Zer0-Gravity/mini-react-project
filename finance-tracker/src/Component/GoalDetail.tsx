import { useNavigate, useParams } from "react-router";
import { useFinanceTrack } from "../Store";
import InputFormHeader from "./InputFormHeader";
import { PlusCircle } from "lucide-react";
import FunCard from "./FunCard";

function GoalDetail() {
    const { goalId } = useParams(); //Get the goalId
    const { goals, funds } = useFinanceTrack();
    const navigate = useNavigate();

    const goalDetail = goals.find((goal) => goal.goalId === goalId); // Find the supposed array based on the ID

    const handleNavigateAddFund = () => {
        navigate("/add-fund-form");
    };
    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-20">
            <InputFormHeader text={goalDetail?.title} />

            <section className="space-y-2">
                <div className="bg-secondary w-full h-40 rounded-lg resize-none p-2">
                    {goalDetail?.description}
                </div>

                <div className="text-secondary space-y-2">
                    <h1 className="font-bold text-[18px]">Progress</h1>
                    <div className="w-full bg-secondary rounded-full border-2 border-secondary">
                        <div className="h-2 bg-primary rounded-full w-25"></div>
                    </div>
                    <div className="flex justify-between">
                        <h1>${goalDetail?.currentAmount?.toFixed(2)}</h1>
                        <h1>${goalDetail?.goalAmount?.toFixed(2)}</h1>
                    </div>
                </div>

                <div className="flex justify-between">
                    <h1 className="text-secondary font-medium">
                        Progress History
                    </h1>
                    <button
                        className="underline text-secondary  flex items-center gap-2 p-2 rounded-lg"
                        onClick={handleNavigateAddFund}
                    >
                        <PlusCircle size={14} />
                        <span className="text-[14px] font-medium">
                            Add Fund
                        </span>
                    </button>
                </div>

                <div className="h-75 bg-secondary rounded-lg overflow-y-auto">
                    {funds.map((fund) => (
                        <FunCard data={fund} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default GoalDetail;
