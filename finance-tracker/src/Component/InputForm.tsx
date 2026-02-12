import type React from "react";

interface InputFormProps {
    inputType: string;
    value: string | number;
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputForm({ inputType, text, value, onChange }: InputFormProps) {
    return (
        <div>
            <h1 className="text-[14px] font-medium text-secondary">{text}</h1>
            <input
                type={inputType}
                value={value}
                className="p-2 bg-secondary rounded-lg w-full outline-none"
                onChange={onChange}
            />
        </div>
    );
}

export default InputForm;
