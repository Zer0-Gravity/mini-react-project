import { Goal } from "lucide-react";
import GoalCard from "../Component/GoalCard";
import ButtonAdd from "../Component/Home/ButtonAdd";

function GoalPage() {
    return (
        <div className="container-custom space-y-3">
            <h1 className="font-bold text-[25px] text-secondary">Goal</h1>
            <section className="flex justify-between items-center">
                <input
                    type="search"
                    placeholder="Search Goal"
                    className="bg-secondary p-2 rounded-lg"
                />
                <ButtonAdd icon={Goal} text={"Add Goal"} />
            </section>
            <section>
                <GoalCard />
            </section>
        </div>
    );
}

export default GoalPage;
