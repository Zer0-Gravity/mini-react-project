import type { GoalProps } from "./type";

export const progressBar = (goalArr: GoalProps) => {
    if (!goalArr) return;

    const current = goalArr.currentAmount ?? 0;
    const total = goalArr.goalAmount ?? 1; //Avoid division by zero
    const percentage = (current / total) * 100;

    //Clamp the value from 0 to 100
    const clamp = Math.min(Math.max(percentage, 0), 100);

    //Round the decimal number
    return Math.round(clamp);
};
