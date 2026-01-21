import React, { useState } from "react";
import Playground from "./Component/Playground";
import ControlBar from "./Component/ControlBar";
import type { MockData } from "./Utils/Type";
import { dataTyping } from "./Utils/DataTyping";

type DifficultyLevels = keyof MockData;

function TypingTest() {
    const [difficulty, setDifficulty] = useState<DifficultyLevels>("easy");

    const changeDifficulties = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(e.target.value as DifficultyLevels); //Narrow e.target.value (string) to union type DifficultyLevels
    };

    const getRandomPassage = (level: keyof MockData) => {
        const levelPassage = dataTyping[level]; //Cast data based on the union type value
        const randomIndex = Math.floor(Math.random() * levelPassage.length);
        return levelPassage[randomIndex];
    };

    const passage = getRandomPassage(difficulty);

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
            <section className="flex justify-between border-b border-b-neutral-600 w-[70%]">
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
                <ControlBar
                    changeDifficulties={changeDifficulties}
                    onValue={difficulty}
                />
            </section>

            {/* Playground */}
            <Playground passage={passage} />
        </main>
    );
}

export default TypingTest;
