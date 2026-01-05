import type React from "react";

interface TagProps {
    handleTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TagInput({ handleTagChange }: TagProps) {
    return (
        <div className="absolute top-12 bg-action-button p-5 rounded-lg flex gap-2">
            <label className="input-check">
                <input
                    type="radio"
                    value="Urgent"
                    name="tag-input"
                    onChange={handleTagChange}
                    className="hidden"
                />
                <span>Urgent</span>
            </label>
            <label className="input-check">
                <input
                    type="radio"
                    value="Personal"
                    name="tag-input"
                    onChange={handleTagChange}
                    className="hidden"
                />
                <span>Personal</span>
            </label>
            <label className="input-check">
                <input
                    type="radio"
                    value="Quick"
                    name="tag-input"
                    onChange={handleTagChange}
                    className="hidden"
                />
                <span>Quick</span>
            </label>
            <label className="input-check">
                <input
                    type="radio"
                    value="Important"
                    name="tag-input"
                    onChange={handleTagChange}
                    className="hidden"
                />
                <span>Important</span>
            </label>
        </div>
    );
}

export default TagInput;
