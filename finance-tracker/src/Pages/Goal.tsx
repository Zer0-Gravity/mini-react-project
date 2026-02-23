import { Goal } from "lucide-react";
import GoalCard from "../Component/GoalCard";
import ButtonAdd from "../Component/Home/ButtonAdd";
import { useFinanceTrack } from "../Store";
import { useState } from "react";

function GoalPage() {
    const { goals } = useFinanceTrack();
    const [query, setQuery] = useState<string>("");

    const filteredGoals = goals.filter((goal) =>
        goal.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div className="container-custom">
            <h1 className="font-bold text-[25px] text-secondary">Goal</h1>
            <section className="flex justify-between items-center">
                <input
                    type="search"
                    placeholder="Search Goal"
                    className="search-query"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <ButtonAdd
                    icon={Goal}
                    text={"Add Goal"}
                    navigate="/goal-window"
                />
            </section>
            <section>
                {filteredGoals.length !== 0 ? (
                    <div>
                        {filteredGoals.map((goal) => (
                            <GoalCard data={goal} />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-secondary text-center font-medium">
                        No goal list found
                    </h1>
                )}
            </section>
        </div>
    );
}

export default GoalPage;
