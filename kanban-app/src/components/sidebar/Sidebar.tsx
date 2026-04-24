import {
    ChevronRight,
    File,
    FolderClosed,
    LogOut,
    MoreVertical,
    Plus,
    Search,
    User,
} from "lucide-react";
import { useState } from "react";
import ToggleButton from "../utils/ToggleButton";

function Sidebar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [accordion, setAccordion] = useState<boolean>(false);

    const isExpanded = isFocused || searchValue.length > 0;

    return (
        <main className="w-75 border-r h-screen p-4 flex flex-col gap-5">
            <div className="flex items-center gap-2 mb-5">
                <img
                    src="/Logo.png"
                    alt="Logo"
                    className="aspect-square w-12"
                />
                <h1 className="text-4xl font-bold">O-Reilo</h1>
            </div>

            {/* Search and Create Section */}
            <section className="flex gap-2">
                {/* Create new project */}
                <button
                    className={`${isExpanded ? "w-10 h-8.75" : "flex-1"} flex items-center justify-center gap-2 bg-orange-300 rounded-[5px]`}
                >
                    <Plus className="shrink-0" />
                    <p
                        className={`${isExpanded ? "hidden" : "block"} font-semibold`}
                    >
                        Create Project
                    </p>
                </button>
                {/* Search Project */}
                <div
                    className={`${isExpanded ? "flex-1" : "w-10"} h-8.75 bg-orange-300 rounded-[5px] relative`}
                >
                    <input
                        type="text"
                        className="w-full h-full outline-none p-2"
                        value={searchValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={isExpanded ? "Search project..." : ""}
                    />
                    <Search
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        size={20}
                    />
                </div>
            </section>

            {/* Project section */}
            <section className="flex-1 select-none cursor-pointer">
                <div
                    className="flex justify-between"
                    onClick={() => setAccordion(!accordion)}
                >
                    <div className="flex gap-2 items-center">
                        <FolderClosed size={18} />
                        <h1 className="font-semibold">My Project</h1>
                    </div>
                    <ChevronRight
                        className={`${accordion ? "rotate-90" : "rotate-0"} transition-all duration-300`}
                    />
                </div>

                {accordion && (
                    <ul className="ml-4 mt-2 select-none cursor-pointer">
                        {["example", "dash", "test"].map((item) => (
                            <li className="group flex items-center gap-2 relative pl-4 pb-3 last:pb-0">
                                {/* Vertical line */}
                                <div className="absolute top-0 left-0 h-full bg-slate-800 w-0.5 group-last:h-1/2" />
                                {/* Horizontal line */}
                                <div className="absolute top-1/2 left-0 h-0.5 w-3 bg-slate-800" />

                                <div className="flex justify-between w-full">
                                    <div className="flex gap-2">
                                        <File size={20} />
                                        {item}
                                    </div>
                                    <MoreVertical size={20} />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Toggle theme */}
            <section className="flex justify-between items-center">
                <h1>Light Mode</h1>
                <ToggleButton />
            </section>

            {/* Account section */}
            <section className="flex items-center justify-between bg-orange-300 p-2 rounded-lg">
                <div className="flex gap-2 items-center">
                    <div className="w-12.5 h-12.5 bg-gray-400 rounded-full grid place-items-center">
                        <User />
                    </div>
                    <h1 className="font-medium">Martha</h1>
                </div>
                <LogOut />
            </section>
        </main>
    );
}

export default Sidebar;
