import type React from "react";

interface TagProps {
    handleTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TagInput({ handleTagChange }: TagProps) {
    return (
        <div className="absolute">
            <label>
                <input type="radio" value="Urgent" onChange={handleTagChange} />
                <span>Urgent</span>
            </label>
            <label>
                <input
                    type="radio"
                    value="Personal"
                    onChange={handleTagChange}
                />
                <span>Personal</span>
            </label>
            <label>
                <input type="radio" value="Quick" onChange={handleTagChange} />
                <span>Quick</span>
            </label>
            <label>
                <input
                    type="radio"
                    value="Important"
                    onChange={handleTagChange}
                />
                <span>Important</span>
            </label>
        </div>
    );
}

export default TagInput;
