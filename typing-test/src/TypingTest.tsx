import React, { useEffect, useRef, useState } from "react";
import Playground from "./Component/Playground";
import ControlBar from "./Component/ControlBar";
import type {
    DifficultyLevels,
    LevelEntries,
    MockData,
    Mode,
    StatusProps,
} from "./Utils/Type";
import { dataTyping } from "./Utils/DataTyping";
import Header from "./Component/Header";

interface MainProps {
    score: number[];
}

function TypingTest({ score }: MainProps) {
    const [difficulty, setDifficulty] = useState<DifficultyLevels>("easy");
    const [seconds, setSeconds] = useState<number>(60);
    const [mode, setMode] = useState<Mode>("timed");
    const [status, setStatus] = useState<StatusProps | null>(null);
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const finalScore = Math.max(0, ...score);

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

    const changeDifficulties = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
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

    const changeMode = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const value = e.target.value as Mode;

        setMode(value);
    };

    console.log(seconds);

    return (
        <main className="mt-10 flex flex-col gap-10 items-center">
            {/* Header Section */}
            <Header score={finalScore} />

            {/* Label section */}
            <section className="flex justify-between border-b border-b-neutral-600 custom-width xs:flex-col xs:gap-4 lg:flex-row items-center">
                <div className="flex gap-10 xs:w-full xs:justify-around lg:w-[10%]">
                    <h1 className="text-neutral-500 status-display-header">
                        <span>WPM: </span>
                        <span className="text-neutral-200 status-display-span">
                            {status?.wpm}
                        </span>
                    </h1>
                    <h1 className="text-neutral-500 status-display-header">
                        <span>Accuracy:</span>
                        <span className="text-red-500 status-display-span">
                            {status?.accuracy}%
                        </span>
                    </h1>
                    <h1 className="text-neutral-500 status-display-header">
                        <span>Time:</span>
                        <span className="text-yellow-400 status-display-span">
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
            <section className="custom-width flex-1 flex flex-col items-center">
                <Playground
                    passage={passage}
                    onStart={startTimer}
                    onStop={stopTimer}
                    seconds={{ seconds, setSeconds }}
                    mode={mode}
                    setStatus={setStatus}
                />
            </section>
        </main>
    );
}

export default TypingTest;
