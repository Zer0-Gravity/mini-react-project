import React from "react";
import Input from "./Input";

interface ControlBarProps {
    changeDifficulties: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
            <div className="flex mb-2 gap-10">
                <div className="flex gap-3 items-center">
                    <h1 className="text-neutral-500">Difficulty: </h1>
                    <div className="space-x-1">
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
                <div className="flex gap-3 items-center">
                    <h1 className="text-neutral-500">Mode</h1>
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
        </>
    );
}

export default ControlBar;
