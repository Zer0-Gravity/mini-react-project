interface TagProps {
    setTag: (tag: string) => void;
}

function TagInput({ setTag }: TagProps) {
    return (
        <div className="absolute">
            <label>
                <input
                    type="radio"
                    value="Urgent"
                    onChange={(e) => setTag(e.target.value)}
                />
                <span>Urgent</span>
            </label>
            <label>
                <input
                    type="radio"
                    value="Personal"
                    onChange={(e) => setTag(e.target.value)}
                />
                <span>Personal</span>
            </label>
            <label>
                <input
                    type="radio"
                    value="Quick"
                    onChange={(e) => setTag(e.target.value)}
                />
                <span>Quick</span>
            </label>
            <label>
                <input
                    type="radio"
                    value="Important"
                    onChange={(e) => setTag(e.target.value)}
                />
                <span>Important</span>
            </label>
        </div>
    );
}

export default TagInput;
