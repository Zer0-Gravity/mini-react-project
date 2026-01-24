import { useLocation, useNavigate } from "react-router";
import Header from "./Header";
import { useEffect, useRef, type SetStateAction } from "react";

interface ResultProps {
    score: number[];
    setScore: React.Dispatch<SetStateAction<number[]>>;
}

function Result({ score, setScore }: ResultProps) {
    const navigate = useNavigate();
    const location = useLocation(); //Get the passed data
    const data = location.state;
    const scoreRef = useRef(false);

    //Get the bigger score
    const finalScore = Math.max(0, ...score);

    const backToMain = () => {
        //Back and delete current state data
        navigate("/", { replace: true, state: null });
    };

    useEffect(() => {
        //Check ref to prevent push twice
        if (!scoreRef.current) {
            setScore((prev) => [...prev, data.wpm]); //Push new score to the array
            scoreRef.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(score);

    return (
        <main className="flex flex-col items-center h-screen">
            {/* Header section */}
            <Header score={finalScore} />

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
                        <h1 className="text-neutral-500">Raw</h1>
                        <span className="text-neutral-200 font-semibold">
                            {data.raw}
                        </span>
                    </div>
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">WPM</h1>
                        <span className="text-neutral-200 font-semibold">
                            {data.wpm}
                        </span>
                    </div>
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">Accuracy</h1>
                        <span className="text-red-500 font-semibold">
                            {data.accuracy}%
                        </span>
                    </div>
                    <div className="border border-neutral-500 w-22.5 py-1 px-2 rounded-sm">
                        <h1 className="text-neutral-500">Character</h1>
                        <p className="text-neutral-200 font-medium">
                            <span className="text-green-500 font-semibold">
                                {data.correctChars}
                            </span>
                            /
                            <span className="text-red-500 font-semibold">
                                {data.wrongChars}
                            </span>
                        </p>
                    </div>
                </section>
                <button
                    onClick={backToMain}
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
