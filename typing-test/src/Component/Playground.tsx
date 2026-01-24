import React, { useEffect, useRef, useState, type SetStateAction } from "react";
import type { LevelEntries } from "../Utils/Type";
import { useNavigate } from "react-router";

interface PlaygroundProps {
    passage: LevelEntries;
    onStart: () => void;
    onStop: () => void;
    seconds: {
        seconds: number;
        setSeconds: React.Dispatch<SetStateAction<number>>;
    };
    mode: string;
}

function Playground({
    passage,
    onStart,
    seconds,
    mode,
    onStop,
}: PlaygroundProps) {
    const [userType, setUserType] = useState<string>("");
    const [spin, setSpinning] = useState<boolean>(false); //State spinning image for restart button
    const [disabledInput, setDisabledInput] = useState<boolean>(false); // State for dibbling input
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleUserType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        //Check if user input length less than the offered passage
        //if so set userType value based on user input
        if (value.length <= passage.text.length) {
            setUserType(value);
        }

        //Check if the user input have the same length with the passage
        if (value.length === passage.text.length || seconds.seconds === 0) {
            setDisabledInput(true); //Disabled input when any condition above match

            //call the calculate function to the new variable
            const finalData = calculate();

            //Wait for 300ms then navigate to the result page
            setTimeout(() => {
                onStop(); //Stop timer logic
                seconds.setSeconds(60); // Reset the timer value
                navigate("/result", { state: finalData }); //pass the final data using state
            }, 300);
        }
    };

    const calculate = () => {
        const time = 60 / 60;
        const totalChars = userType.length;

        const { correctChars, wrongChars } = userType.split("").reduce(
            (acc, char, index) => {
                //Check if the passage match the user input and put each wrong and correct
                //to separate declared variable
                if (char === passage.text[index]) {
                    acc.correctChars++;
                } else {
                    acc.wrongChars++;
                }
                return acc;
            },
            { correctChars: 0, wrongChars: 0 },
        );

        //Get the WPM final value based on corrected chars
        const wpm = time > 0 ? Math.round(correctChars / 5 / time) : 0;

        //Get raw typing speed
        const raw = time > 0 ? Math.round(totalChars / 5 / time) : 0;

        //Get accuracy typing
        const accuracy =
            totalChars > 0
                ? Math.round((correctChars / totalChars) * 100)
                : 100;

        return { wpm, raw, accuracy, correctChars, wrongChars };
    };

    const restartLevel = () => {
        setUserType("");
        seconds.setSeconds(60); //Reset the timer value to initial value
        setDisabledInput(false);
        setSpinning(true);

        //Wait 1 second then revert the spin boolean to false
        setTimeout(() => {
            setSpinning(false);
        }, 1000);
    };

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            let isStarted = false;

            if (
                /^[a-zA-Z]$/.test(e.key) && //Regex check ensure trigger only the alphabet key avoid Ctrl, Shift etc
                document.activeElement !== inputRef.current
            ) {
                inputRef.current?.focus(); //Focus on input field as soon as user type a any alphabet key
                //Check what mode currently on, if timed we start the time
                if (mode === "timed") {
                    if (!isStarted) {
                        onStart(); // Run the timer as the condition meet
                        isStarted = true;
                    }
                }
            }
        };
        window.addEventListener("keydown", handleKeydown); // Add global listener
        return () => window.removeEventListener("keydown", handleKeydown); //Cleanup to avoid memory leak
    }, [onStart, mode]);

    return (
        <>
            <section className=" relative min-h-140 border-b border-b-neutral-500">
                <div>
                    {passage.text.split("").map((char, index) => (
                        <span
                            // Change font color based on the match of user input and passage char
                            className={`relative text-justify xs:text-[25px] md:text-[30px] ${index < userType.length ? (userType[index] === char ? "text-green-400" : "text-red-400 underline") : "text-neutral-400"}`}
                        >
                            {/* Cursor */}
                            {index === userType.length && (
                                <span className="bg-neutral-500/50 rounded-lg inset-0 absolute w-full h-full animate-pulse"></span>
                            )}
                            {char}
                        </span>
                    ))}
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    disabled={disabledInput} //Take the boolean disabledInput state
                    value={userType}
                    onChange={handleUserType}
                    className="opacity-0 absolute"
                />
            </section>
            <button
                onClick={restartLevel}
                className="bg-neutral-700 flex gap-2 p-3 rounded-lg active:scale-98 group mt-10"
            >
                <span className="text-neutral-200">Restart Test</span>
                <img
                    src="/images/icon-restart.svg"
                    alt="restart"
                    className={`${spin ? "animate-spin-reverse" : ""}`} //Check if spin true, if so the add  custom animate spin class
                />
            </button>
        </>
    );
}

export default Playground;
