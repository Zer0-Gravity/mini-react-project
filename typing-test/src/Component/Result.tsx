import { useNavigate } from "react-router";
import Header from "./Header";

function Result() {
    const navigate = useNavigate();

    const backToPlayground = () => {
        navigate("/");
    };

    return (
        <main className="flex flex-col items-center h-screen">
            {/* Header section */}
            <Header />

            <div className="flex-1 flex flex-col items-center gap-5 justify-center">
                <section className="flex flex-col items-center justify-center md:w-full gap-4 ">
                    <div className="complete-icon">
                        <img src="/images/icon-completed.svg" alt="complete" />
                    </div>
                    <h1 className="text-neutral-200 text-[25px] font-semibold mt-5">
                        Test Complete!
                    </h1>
                    <p className="text-neutral-500">
                        Solid run. Keep pushing to beat your high score
                    </p>
                </section>
                <section className="flex gap-4">
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">WPM</h1>
                        <span className="text-neutral-200 font-semibold">
                            85
                        </span>
                    </div>
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">Accuracy</h1>
                        <span className="text-red-500 font-semibold">85%</span>
                    </div>
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">Character</h1>
                        <p className="text-neutral-200 font-medium">
                            <span className="text-green-500 font-semibold">
                                120
                            </span>
                            /
                            <span className="text-red-500 font-semibold">
                                5
                            </span>
                        </p>
                    </div>
                </section>
                <button
                    onClick={backToPlayground}
                    className="flex bg-neutral-500 px-3 py-2.5 rounded-lg gap-3"
                >
                    <span className="text-neutral-200">Play again</span>
                    <img src="/images/icon-restart.svg" alt="logo-button" />
                </button>
            </div>
        </main>
    );
}

export default Result;
