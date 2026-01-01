function Dropdown() {
    return (
        <div className="absolute bg-amber-100 p-5">
            <div>
                <h1>Filter By Role</h1>
                <div>
                    <Input value="" desc="All" filter="filter-role" />
                    <Input value="" desc="Manager" filter="filter-role" />
                    <Input value="" desc="Admin" filter="filter-role" />
                    <Input value="" desc="Editor" filter="filter-role" />
                    <Input value="" desc="User" filter="filter-role" />
                </div>
            </div>
            <div>
                <h1>Filter By Status</h1>
                <div>
                    <Input value="" desc="All" filter="filter-status" />
                    <Input
                        value="Active"
                        desc="Active"
                        filter="filter-status"
                    />
                    <Input
                        value="Inactive"
                        desc="Inactive"
                        filter="filter-status"
                    />
                    <Input
                        value="Vacation"
                        desc="Vacation"
                        filter="filter-status"
                    />
                </div>
            </div>
        </div>
    );
}

interface InputProp {
    value: string;
    desc: string;
    filter: string;
}

function Input({ value, desc, filter }: InputProp) {
    return (
        <label>
            <input type="radio" name={filter} value={value} />
            <span>{desc}</span>
        </label>
    );
}

export default Dropdown;
