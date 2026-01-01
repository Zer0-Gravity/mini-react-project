interface InputProp {
    value: string;
    desc: string;
    filter: string;
    onFilter: (value: string) => void;
}

function Input({ value, desc, filter, onFilter }: InputProp) {
    return (
        <label>
            <input
                type="radio"
                name={filter}
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
            <span>{desc}</span>
        </label>
    );
}

export default Input;
