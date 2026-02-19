import { Goal, MailPlus, Send, ShoppingBag } from "lucide-react";
import ButtonAdd from "../Component/Home/ButtonAdd";
import DisplayButton from "../Component/Home/DisplayButton";
import GoalCard from "../Component/GoalCard";
import TrackerCard from "../Component/TrackerCard";
import { useFinanceTrack } from "../Store";
import { useBalance } from "../utility";

function Home() {
    const { transactions, goals } = useFinanceTrack();

    const favoriteGoals = goals.filter((goal) => goal.favorite === true); //Filter array by favorite is true
    const slicedArray = transactions.slice(-4); //Show only 4 newly added array

    return (
        <main className="container-custom flex flex-col gap-5">
            {/* balance Display */}
            <section className="w-full h-67.5 bg-secondary p-2 rounded-lg flex-col flex items-center justify-center gap-3">
                <h1 className="text-[16px] font-medium">Your Balance</h1>
                <h1 className="text-[50px] font-medium">{`$${useBalance()}`}</h1>
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
                    <div className="flex gap-3 overflow-x-auto overflow-hidden hide-scrollbar">
                        {favoriteGoals.length !== 0 ? (
                            favoriteGoals.map((goal) => (
                                <GoalCard data={goal} />
                            ))
                        ) : (
                            <div className="h-20">
                                <h1 className="text-secondary opacity-75">
                                    No pinned goal
                                </h1>
                            </div>
                        )}
                    </div>
                </div>

                {/* Activity Card */}
                <div className="space-y-3">
                    <h1 className="text-[16px] font-semibold text-secondary">
                        Recent Activity
                    </h1>
                    <div className="flex flex-col gap-2 overflow-y-auto overflow-hidden max-h-62.5 hide-scrollbar">
                        {slicedArray.length !== 0 ? (
                            slicedArray.map((transaction) => (
                                <TrackerCard
                                    rounded={true}
                                    data={transaction}
                                />
                            ))
                        ) : (
                            <h1 className="text-secondary opacity-75">
                                No recent activity
                            </h1>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
