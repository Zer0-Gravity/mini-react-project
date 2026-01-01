import Input from "./Input";
import { useFloating } from "@floating-ui/react";

interface DropdownProps {
    setFilterRole: (value: string) => void;
    setFilterStatus: (value: string) => void;
    refs: ReturnType<typeof useFloating>["refs"];
    floatingStyles: ReturnType<typeof useFloating>["floatingStyles"];
}

function Dropdown({
    setFilterRole,
    setFilterStatus,
    refs,
    floatingStyles,
}: DropdownProps) {
    return (
        <div
            className=" bg-amber-100 p-5"
            ref={(node) => {
                refs.setFloating(node);
            }}
            style={floatingStyles}
        >
            <div>
                <h1>Filter By Role</h1>
                <div>
                    <Input
                        value=""
                        desc="All"
                        filter="filter-role"
                        onFilter={setFilterRole}
                    />
                    <Input
                        value="Manager"
                        desc="Manager"
                        filter="filter-role"
                        onFilter={setFilterRole}
                    />
                    <Input
                        value="Admin"
                        desc="Admin"
                        filter="filter-role"
                        onFilter={setFilterRole}
                    />
                    <Input
                        value="Editor"
                        desc="Editor"
                        filter="filter-role"
                        onFilter={setFilterRole}
                    />
                    <Input
                        value="User"
                        desc="User"
                        filter="filter-role"
                        onFilter={setFilterRole}
                    />
                </div>
            </div>
            <div>
                <h1>Filter By Status</h1>
                <div>
                    <Input
                        value=""
                        desc="All"
                        filter="filter-status"
                        onFilter={setFilterStatus}
                    />
                    <Input
                        value="Active"
                        desc="Active"
                        filter="filter-status"
                        onFilter={setFilterStatus}
                    />
                    <Input
                        value="Inactive"
                        desc="Inactive"
                        filter="filter-status"
                        onFilter={setFilterStatus}
                    />
                    <Input
                        value="Vacation"
                        desc="Vacation"
                        filter="filter-status"
                        onFilter={setFilterStatus}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
