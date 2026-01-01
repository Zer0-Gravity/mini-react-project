import { useState } from "react";
import Table from "../Component/Table";
import type { PeopleProps } from "../Utils/Type";

function Home({ people }: { people: PeopleProps[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = people.filter((data) => {
        return data.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="ml-35">
            <div className="flex">
                <div className="flex-1">
                    <input
                        type="search"
                        placeholder="Search employee.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-5">
                    <label>
                        <input
                            type="radio"
                            name="filter-group"
                            value="Manager"
                        />
                        <span>Manager</span>
                    </label>
                    <label>
                        <input type="radio" name="filter-group" value="Admin" />
                        <span>Admin</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="filter-group"
                            value="Editor"
                        />
                        <span>Editor</span>
                    </label>
                    <label>
                        <input type="radio" name="filter-group" value="User" />
                        <span>User</span>
                    </label>
                </div>
                <div>
                    <button>Add Employee</button>
                </div>
            </div>

            <Table filteredData={filteredData} />
        </div>
    );
}

export default Home;
