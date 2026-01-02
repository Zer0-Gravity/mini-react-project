interface InputProp {
    value: string;
    desc: string;
    filter: string;
    onFilter: (value: string) => void;
}

function Input({ value, desc, filter, onFilter }: InputProp) {
    return (
        <label className="font-semibold border border-primary-color rounded-lg has-checked:bg-primary-color has has-checked:text-light-text py-2 px-3">
            <input
                type="radio"
                name={filter}
                value={value}
                onChange={(e) => onFilter(e.target.value)}
                className="hidden"
            />
            <span className="select-none">{desc}</span>
        </label>
    );
}

export default Input;
