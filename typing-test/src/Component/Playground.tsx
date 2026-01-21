import React, { useEffect, useRef, useState } from "react";
import type { LevelEntries } from "../Utils/Type";

interface PlaygroundProps {
    passage: LevelEntries;
}

function Playground({ passage }: PlaygroundProps) {
    const [userType, setUserType] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUserType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserType(e.target.value);
    };

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (
                /^[a-zA-Z]$/.test(e.key) && //Regex check ensure trigger only the alphabet key avoid Ctrl, Shift etc
                document.activeElement !== inputRef.current
            ) {
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeydown); // Add global listener
        return () => window.removeEventListener("keydown", handleKeydown); //Cleanup avoid memory leak
    }, []);

    return (
        <>
            <div>
                {passage.text.split("").map((char, index) => (
                    <span
                        className={`relative text-[35px] ${index < userType.length ? (userType[index] === char ? "text-green-400" : "text-red-400") : "text-neutral-400"}`}
                    >
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
                onChange={handleUserType}
                placeholder="here"
                className="opacity-0 absolute"
            />
        </>
    );
}

export default Playground;
