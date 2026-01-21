import React from "react";
import Input from "./Input";

interface ControlBarProps {
    changeDifficulties: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ControlBar({ changeDifficulties }: ControlBarProps) {
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
                        />
                        <Input
                            text="Medium"
                            value="medium"
                            name="difficulty"
                            onInteract={changeDifficulties}
                        />
                        <Input
                            text="Hard"
                            value="hard"
                            name="difficulty"
                            onInteract={changeDifficulties}
                        />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <h1 className="text-neutral-500">Mode</h1>
                    <Input text="Timed(60s)" value="60" name="mode" />
                    <Input text="Passage" value="Passage" name="mode" />
                </div>
            </div>
        </>
    );
}

export default ControlBar;
