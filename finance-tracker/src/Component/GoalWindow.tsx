import React, { useState } from "react";
import InputForm from "./InputForm";
import InputFormHeader from "./InputFormHeader";
import { CirclePlus } from "lucide-react";

function GoalWindow() {
    const [title, setTitle] = useState<string>("");
    const [goalAmount, setGoalAmount] = useState<number>(0);
    const [goalDesc, setGoalDesc] = useState<string>("");

    const addNewGoal = () => {};

    //Handle change event
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleGoalAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGoalAmount(+e.target.value); // Add + same with Number() => to convert the value to number
    };

    const handleGoalDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGoalDesc(e.target.value);
    };

    return (
        <main className="w-200 h-200 bg-primary rounded-lg p-40">
            <InputFormHeader text="Add Goal" />

            <section className="space-y-2">
                <InputForm
                    text="Title"
                    inputType="text"
                    value={title}
                    onChange={handleTitle}
                />

                <InputForm
                    text="Goal Amount"
                    inputType="number"
                    value={goalAmount}
                    onChange={handleGoalAmount}
                />

                <div className="space-y-2">
                    <h1 className="text-[14px] font-medium text-secondary">
                        Goal Description{" "}
                        <span className="opacity-70">(Optional)</span>
                    </h1>
                    <textarea
                        value={goalDesc}
                        onChange={handleGoalDesc}
                        className="p-2 bg-secondary rounded-lg w-full outline-none h-30 resize-none"
                    />
                </div>

                <button
                    className="bg-secondary p-2 rounded-lg font-medium text-primary items-center flex w-full justify-center gap-2"
                    onClick={addNewGoal}
                >
                    <CirclePlus size={20} />
                    Add Goal
                </button>
            </section>
        </main>
    );
}

export default GoalWindow;
