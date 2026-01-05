interface DropdownProps {
    handleTagFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tagFilter: string;
}

function Dropdown({ handleTagFilter, tagFilter }: DropdownProps) {
    return (
        <div className="absolute top-10 bg-action-button z-100 flex p-5 gap-3 rounded-lg">
            <label className="flex py-1.5 px-2 rounded-lg border-2 text-black font-semibold has-checked:bg-active has-checked:text-white has-checked:border-2">
                <input
                    type="checkbox"
                    value="Urgent"
                    checked={tagFilter === "Urgent"}
                    onChange={handleTagFilter}
                    className="hidden"
                />
                <span>Urgent</span>
            </label>
            <label className="flex py-1.5 px-2 rounded-lg border-2 text-black font-semibold has-checked:bg-active has-checked:text-white has-checked:border-2">
                <input
                    type="checkbox"
                    value="Important"
                    checked={tagFilter === "Important"}
                    onChange={handleTagFilter}
                    className="hidden"
                />
                <span>Important</span>
            </label>
            <label className="flex py-1.5 px-2 rounded-lg border-2 text-black font-semibold has-checked:bg-active has-checked:text-white has-checked:border-2">
                <input
                    type="checkbox"
                    value="Personal"
                    checked={tagFilter === "Personal"}
                    onChange={handleTagFilter}
                    className="hidden"
                />
                <span>Personal</span>
            </label>
            <label className="input-check">
                <input
                    type="checkbox"
                    value="Quick"
                    checked={tagFilter === "Quick"}
                    onChange={handleTagFilter}
                    className="hidden"
                />
                <span>Quick</span>
            </label>
        </div>
    );
}

export default Dropdown;
