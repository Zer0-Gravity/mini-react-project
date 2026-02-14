import { Goal, MailPlus, Send, ShoppingBag } from "lucide-react";
import ButtonAdd from "../Component/Home/ButtonAdd";
import DisplayButton from "../Component/Home/DisplayButton";
import GoalCard from "../Component/GoalCard";
import TrackerCard from "../Component/TrackerCard";
import { useFinanceTrack } from "../Store";

function Home() {
    const { transactions, goals } = useFinanceTrack();

    return (
        <main className="container-custom flex flex-col gap-5">
            {/* balance Display */}
            <section className="w-full h-67.5 bg-secondary p-2 rounded-lg flex-col flex items-center justify-center gap-3">
                <h1 className="text-[16px] font-medium">Your Balance</h1>
                <h1 className="text-[50px] font-medium">$450,000.00</h1>
                <div className="flex gap-20">
                    <DisplayButton text="Send Money" icon={Send} />
                    <DisplayButton text="Receive Money" icon={MailPlus} />
                </div>
            </section>

            {/* Add button */}
            <section>
                <div className="flex justify-end gap-5">
                    <ButtonAdd
                        icon={Goal}
                        text="Add Goal"
                        navigate="/goal-window"
                    />
                    <ButtonAdd
                        icon={ShoppingBag}
                        text="Add Transaction"
                        navigate="/transaction-window"
                    />
                </div>
            </section>

            <section className="space-y-8">
                {/* Goal card */}
                <div className="space-y-3">
                    <h1 className="text-[16px] font-semibold text-secondary">
                        Goal
                    </h1>
                    <div className="flex gap-3 border overflow-x-auto overflow-hidden hide-scrollbar">
                        {goals.map((goal) =>
                            goal.favorite === true ? (
                                <GoalCard data={goal} />
                            ) : (
                                <h1>No favorite</h1>
                            ),
                        )}
                    </div>
                </div>

                {/* Activity Card */}
                <div className="space-y-3">
                    <h1 className="text-[16px] font-semibold text-secondary">
                        Recent Activity
                    </h1>
                    <div className="flex flex-col gap-2 overflow-y-auto overflow-hidden max-h-62.5 hide-scrollbar">
                        <TrackerCard rounded={true} data={transactions} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
