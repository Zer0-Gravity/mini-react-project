interface DropdownProps {
    handleTagFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tagFilter: string;
}

function Dropdown({ handleTagFilter, tagFilter }: DropdownProps) {
    return (
        <div className="absolute">
            <label>
                <input
                    type="checkbox"
                    value="Urgent"
                    checked={tagFilter === "Urgent"}
                    onChange={handleTagFilter}
                />
                <span>Urgent</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Important"
                    checked={tagFilter === "Important"}
                    onChange={handleTagFilter}
                />
                <span>Important</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Personal"
                    checked={tagFilter === "Personal"}
                    onChange={handleTagFilter}
                />
                <span>Personal</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Quick"
                    checked={tagFilter === "Quick"}
                    onChange={handleTagFilter}
                />
                <span>Quick</span>
            </label>
        </div>
    );
}

export default Dropdown;
