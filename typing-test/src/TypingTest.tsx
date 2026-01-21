import React, { useState } from "react";
import Playground from "./Component/Playground";
import ControlBar from "./Component/ControlBar";

function TypingTest() {
    const [difficulty, setDificulty] = useState<string>("");

    const changeDifficulties = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDificulty(e.target.value);
    };

    console.log(difficulty);

    return (
        <main className="mt-10 flex flex-col gap-10 items-center">
            {/* Header Section */}
            <header className="flex justify-between w-[70%]">
                <img src="/images/logo-large.svg" alt="" />
                <div className="flex gap-2 items-center">
                    <img src="/images/icon-personal-best.svg" alt="" />
                    <h1 className="text-neutral-500">
                        Personal best:
                        <span className="text-neutral-200"> 92 WPM</span>
                    </h1>
                </div>
            </header>

            {/* Label section */}
            <section className="flex justify-between border-b border-b-neutral-500 w-[70%]">
                <div className="flex gap-10">
                    <h1 className="text-neutral-500">
                        WPM:
                        <span className="text-neutral-200 font-bold"> 40</span>
                    </h1>
                    <h1 className="text-neutral-500">
                        Accuracy:
                        <span className="text-red-500 font-bold"> 95%</span>
                    </h1>
                    <h1 className="text-neutral-500">
                        Time:
                        <span className="text-yellow-400 font-bold"> 0:46</span>
                    </h1>
                </div>

                {/* Control bar section */}
                <ControlBar changeDifficulties={changeDifficulties} />
            </section>

            {/* Playground */}
            <section className="w-[70%]">
                <Playground />
            </section>
        </main>
    );
}

export default TypingTest;
