import React from "react";
import Input from "./Input";

interface ControlBarProps {
    changeDifficulties: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    changeMode: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    difficulty: string;
    mode: string;
}

function ControlBar({
    changeDifficulties,
    difficulty,
    changeMode,
    mode,
}: ControlBarProps) {
    return (
        <>
            <div className="flex mb-2 gap-10 ">
                <div className="flex gap-3 items-center flex-1">
                    <h1 className="text-neutral-500 xs:hidden md:block">
                        Difficulty:{" "}
                    </h1>
                    <select
                        value={difficulty}
                        onChange={changeDifficulties}
                        className="md:hidden text-blue-500 border border-blue-500 px-2 py-1 rounded-lg outline-none"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <div className="xs:hidden md:flex space-x-1">
                        <Input
                            text="Easy"
                            value="easy"
                            name="difficulty"
                            onInteract={changeDifficulties}
                            onValue={difficulty}
                        />
                        <Input
                            text="Medium"
                            value="medium"
                            name="difficulty"
                            onInteract={changeDifficulties}
                            onValue={difficulty}
                        />
                        <Input
                            text="Hard"
                            value="hard"
                            name="difficulty"
                            onInteract={changeDifficulties}
                            onValue={difficulty}
                        />
                    </div>
                </div>
                <div className="flex gap-3 items-center ">
                    <h1 className="text-neutral-500 xs:hidden md:block">
                        Mode
                    </h1>
                    <select
                        value={mode}
                        onChange={changeMode}
                        className="md:hidden text-blue-500 border border-blue-500 px-2 py-1 rounded-lg outline-none w-full"
                    >
                        <option value="timed">Timed(60)</option>
                        <option value="passage">Passage</option>
                    </select>
                    <div className="xs:hidden md:flex space-x-1">
                        <Input
                            text="Timed(60s)"
                            value="timed"
                            name="mode"
                            onInteract={changeMode}
                            onValue={mode}
                        />
                        <Input
                            text="Passage"
                            value="passage"
                            name="mode"
                            onInteract={changeMode}
                            onValue={mode}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ControlBar;
