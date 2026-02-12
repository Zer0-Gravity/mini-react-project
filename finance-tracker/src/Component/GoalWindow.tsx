import { CircleX } from "lucide-react";
import { useNavigate } from "react-router";

function GoalWindow() {
    const navigate = useNavigate();

    const previousPage = () => {
        navigate(-1);
    };

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <section className="flex justify-between mb-10">
                <h1 className="text-2xl font-bold text-secondary">Add Goal</h1>
                <button onClick={previousPage}>
                    {/*Close page when button clicked*/}
                    <CircleX className="text-secondary" size={20} />
                </button>
            </section>
        </main>
    );
}

export default GoalWindow;
