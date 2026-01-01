import { useState } from "react";
import Table from "../Component/Table";
import type { PeopleProps } from "../Utils/Type";
import { LuFilter } from "react-icons/lu";
import Dropdown from "../Component/Dropdown";

function Home({ people }: { people: PeopleProps[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterDropDown, setFilterDropDown] = useState<boolean>(false);
    const [filterRole, setFilterRole] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");

    const filteredData = people.filter(({ name, role, status }) => {
        const matchName = name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchRole = filterRole === "" || role === filterRole;
        const matchStatus = filterStatus === "" || status === filterStatus;

        return matchName && matchRole && matchStatus;
    });

    console.log(filterRole, filterStatus);

    return (
        <div className="ml-35">
            <div className="flex items-center">
                <div className="flex-1">
                    <input
                        type="search"
                        placeholder="Search employee.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <button
                        className="flex text-xl items-center"
                        onClick={() => setFilterDropDown(!filterDropDown)}
                    >
                        <LuFilter size={25} /> Filter
                    </button>

                    {filterDropDown && (
                        <Dropdown
                            setFilterRole={setFilterRole}
                            setFilterStatus={setFilterStatus}
                        />
                    )}
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
