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
                /^[a-zA-Z]$/.test(e.key) && //Regex check ensure the trigger only the alphabet
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
                <p className="text-justify text-neutral-300 text-[35px]">
                    {passage.text}
                </p>
            </div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleUserType}
                placeholder="here"
                className="p-5 bg-white"
            />
        </>
    );
}

export default Playground;
