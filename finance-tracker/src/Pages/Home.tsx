import {
    Goal,
    HandCoins,
    MailPlus,
    Send,
    ShoppingBag,
    type LucideIcon,
} from "lucide-react";
import ButtonAdd from "../Component/Home/ButtonAdd";

function Home() {
    return (
        <main className="container-custom flex flex-col gap-5">
            {/* balance Display */}
            <section className="w-full h-67.5 bg-secondary p-2 rounded-lg flex-col flex items-center justify-center gap-3">
                <h1 className="text-[16px] font-medium">Your Balance</h1>
                <h1 className="text-[50px] font-medium">$450,000.00</h1>
                <div className="flex gap-20">
                    <Button text="Send Money" icon={Send} />
                    <Button text="Receive Money" icon={MailPlus} />
                </div>
            </section>

            {/* Add button */}
            <section>
                <div className="flex justify-end gap-5">
                    <ButtonAdd icon={Goal} text="Add Goal" />
                    <ButtonAdd icon={HandCoins} text="Add Income" />
                    <ButtonAdd icon={ShoppingBag} text="Add Expense" />
                </div>
            </section>

            <section>

                {/* Goal card */}
                <div>
                    <h1 className="text-[16px] font-semibold text-secondary">
                        Goal
                    </h1>
                </div>

                {/* Activity Card */}
                <div>
                    <h1 className="text-[16px] font-semibold text-secondary">
                        Recent Activity
                    </h1>
                </div>
            </section>
        </main>
    );
}

interface ButtonProps {
    icon: LucideIcon;
    text: string;
}

function Button({ icon: Icon, text }: ButtonProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <button className="w-12.5 h-12.5 rounded-full bg-button flex items-center justify-center">
                {<Icon size={20} color="white" />}
            </button>
            <span className="font-medium text-primary">{text}</span>
        </div>
    );
}

export default Home;
