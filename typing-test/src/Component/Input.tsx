interface InputProps {
    value: string;
    text: string;
    name: string;
}

function Input({ value, text, name }: InputProps) {
    return (
        <label className="border border-neutral-500 px-2 py-1 rounded-lg has-checked:border-blue-600">
            <input
                type="radio"
                name={name}
                className="peer hidden"
                value={value}
            />
            <span className="text-neutral-200 peer-checked:text-blue-600">
                {text}
            </span>
        </label>
    );
}

export default Input;
