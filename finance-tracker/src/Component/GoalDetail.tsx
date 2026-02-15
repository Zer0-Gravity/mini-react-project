import { useParams } from "react-router";
import { useFinanceTrack } from "../Store";

function GoalDetail() {
    const { goalId } = useParams(); //Get the goalId
    const { goals } = useFinanceTrack();

    const goalDetail = goals.find((goal) => goal.goalId === goalId); // Find the supposed array based on the ID

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <h1>{goalDetail?.title}</h1>
        </main>
    );
}

export default GoalDetail;
