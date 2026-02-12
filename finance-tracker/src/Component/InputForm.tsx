import type { SetStateAction } from "react";

interface InputFormProps {
    inputType: string;
    value: string;
    text: string;
    onChange: React.Dispatch<SetStateAction<string>>;
}

function InputForm({ inputType, text, value, onChange }: InputFormProps) {
    return (
        <div>
            <h1 className="text-[14px] font-medium text-secondary">{text}</h1>
            <input
                type={inputType}
                value={value}
                className="p-2 bg-secondary rounded-lg w-full outline-none"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default InputForm;
