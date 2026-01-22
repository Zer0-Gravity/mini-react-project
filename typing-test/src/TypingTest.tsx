import React, { useEffect, useRef, useState } from "react";
import Playground from "./Component/Playground";
import ControlBar from "./Component/ControlBar";
import type { LevelEntries, MockData } from "./Utils/Type";
import { dataTyping } from "./Utils/DataTyping";

type DifficultyLevels = keyof MockData;
type Mode = "timed" | "passage";

function TypingTest() {
    const [difficulty, setDifficulty] = useState<DifficultyLevels>("easy");
    const [seconds, setSeconds] = useState<number>(60);
    const [mode, setMode] = useState<Mode>("timed");
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = () => {
        //Check if the timer currently running or not
        if (timeRef.current !== null) return;

        timeRef.current = setInterval(() => {
            setSeconds((prev) => {
                //Check if the seconds value less or equal than 1 then call the stopTimer function
                //Returning the 0 value
                if (prev <= 1) {
                    stopTimer();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const stopTimer = () => {
        //If timer currently running and the stopTimer get called
        //Stop the interval ans set to null
        if (timeRef.current) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    };

    //Clean up on unmount
    useEffect(() => {
        return () => stopTimer();
    }, []);

    const changeDifficulties = (e: React.ChangeEvent<HTMLInputElement>) => {
        const level = e.target.value as DifficultyLevels; //Narrow e.target.value (string) to union type DifficultyLevels
        setDifficulty(level);

        const newPassage = getRandomPassage(level); //Get return value based on the union type
        setPassage(newPassage);
    };

    const getRandomPassage = (level: keyof MockData) => {
        const levelPassage = dataTyping[level]; //Cast data based on the union type value
        const randomIndex = Math.floor(Math.random() * levelPassage.length); //Randomize the array passage on random index
        return levelPassage[randomIndex];
    };

    const [passage, setPassage] = useState<LevelEntries>(() =>
        getRandomPassage(difficulty),
    );

    const changeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Mode;

        setMode(value);
    };
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
                        <span className="text-yellow-400 font-bold">
                            0:{`${seconds < 10 ? "0" + seconds : seconds}`}
                        </span>
                    </h1>
                </div>

                {/* Control bar section */}
                <ControlBar
                    changeDifficulties={changeDifficulties}
                    changeMode={changeMode}
                    difficulty={difficulty}
                    mode={mode}
                />
            </section>

            {/* Playground */}
            <section className="w-[70%] flex-1 flex flex-col items-center">
                <Playground
                    passage={passage}
                    onStart={startTimer}
                    seconds={{ seconds, setSeconds }}
                />
            </section>
        </main>
    );
}

export default TypingTest;
