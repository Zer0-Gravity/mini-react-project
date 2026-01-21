import React, { useEffect, useRef, useState } from "react";
import type { LevelEntries } from "../Utils/Type";

interface PlaygroundProps {
    passage: LevelEntries;
}

function Playground({ passage }: PlaygroundProps) {
    const [userType, setUserType] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUserType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        //Check if user input less than the offered passage
        //if so set userType value based on user input
        if (value.length <= passage.text.length) {
            setUserType(value);
        }

        //Check if the user input have the same length with the passage
        if (value.length === passage.text.length) {
            alert("finish");
        }
    };

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (
                /^[a-zA-Z]$/.test(e.key) && //Regex check ensure trigger only the alphabet key avoid Ctrl, Shift etc
                document.activeElement !== inputRef.current
            ) {
                inputRef.current?.focus(); //Focus on input field as soon as user type a any alphabet key
            }
        };
        window.addEventListener("keydown", handleKeydown); // Add global listener
        return () => window.removeEventListener("keydown", handleKeydown); //Cleanup to avoid memory leak
    }, []);

    return (
        <>
            <div>
                {passage.text.split("").map((char, index) => (
                    <span
                        // Change font color based on the match of user input and passage char
                        className={`relative text-[35px] ${index < userType.length ? (userType[index] === char ? "text-green-400" : "text-red-400 underline") : "text-neutral-400"}`}
                    >
                        {/* Cursor */}
                        {index === userType.length && (
                            <span className="bg-neutral-500/50 rounded-full inset-0 absolute w-full h-full animate-bounce"></span>
                        )}
                        {char}
                    </span>
                ))}
            </div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleUserType}
                className="opacity-0 absolute"
            />
        </>
    );
}

export default Playground;
