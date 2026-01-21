import type React from "react";

interface InputProps {
    value: string;
    text: string;
    name: string;
    onInteract?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onValue?: string;
}

function Input({ value, text, name, onInteract, onValue }: InputProps) {
    return (
        <label className="border border-neutral-500 px-2 py-1 rounded-lg has-checked:border-blue-600">
            <input
                type="radio"
                name={name}
                className="peer hidden"
                value={value}
                checked={onValue === value}
                onChange={onInteract}
            />
            <span className="text-neutral-200 peer-checked:text-blue-600">
                {text}
            </span>
        </label>
    );
}

export default Input;
