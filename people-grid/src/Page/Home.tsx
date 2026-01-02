import { useEffect, useRef, useState } from "react";
import Table from "../Component/Table";
import type { PeopleProps } from "../Utils/Type";
import { LuFilter } from "react-icons/lu";
import Dropdown from "../Component/Dropdown";
import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react";

function Home({ people }: { people: PeopleProps[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterDropDown, setFilterDropDown] = useState<boolean>(false);
    const [filterRole, setFilterRole] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleDropdown = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setFilterDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleDropdown);
        return () => document.removeEventListener("mousedown", handleDropdown);
    }, []);

    const filteredData = people.filter(({ name, role, status }) => {
        const matchName = name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchRole = filterRole === "" || role === filterRole;
        const matchStatus = filterStatus === "" || status === filterStatus;

        return matchName && matchRole && matchStatus;
    });

    const { refs, floatingStyles } = useFloating({
        placement: "left-start",
        middleware: [offset(20), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return (
        <div className="ml-35 space-y-10" ref={dropdownRef}>
            <div className="flex items-center gap-3">
                <div>
                    <input
                        type="search"
                        placeholder="Search employee.."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-3 py-2 bg-white rounded-lg outline-none w-60"
                    />
                </div>
                <div className="px-3 py-2 rounded-lg bg-accent-color">
                    <button
                        className="flex text-xl items-center justify-between text-dark-text font-semibold   "
                        onClick={() => setFilterDropDown(!filterDropDown)}
                        ref={(node) => {
                            refs.setReference(node);
                        }}
                    >
                        <LuFilter size={25} /> Filter
                    </button>

                    {filterDropDown && (
                        <Dropdown
                            setFilterRole={setFilterRole}
                            setFilterStatus={setFilterStatus}
                            refs={refs}
                            floatingStyles={floatingStyles}
                        />
                    )}
                </div>
            </div>

            <Table filteredData={filteredData} />
        </div>
    );
}

export default Home;
