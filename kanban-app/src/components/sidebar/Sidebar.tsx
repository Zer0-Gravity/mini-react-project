import {
    ChevronRight,
    FolderClosed,
    LogOut,
    Plus,
    Search,
    Sun,
    User,
} from "lucide-react";
import { useState } from "react";

function Sidebar() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isExpanded = isFocused || searchValue.length > 0;

    return (
        <main className="w-75 border-r h-screen p-4 flex flex-col gap-4">
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
                    />
                    <Search
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        size={20}
                    />
                </div>
            </section>

            {/* Project section */}
            <section className="flex-1">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <FolderClosed />
                        <h1>My Project</h1>
                    </div>
                    <ChevronRight />
                </div>
            </section>

            {/* Toggle theme */}
            <section className="flex">
                <h1>Light Mode</h1>
                <button>
                    <Sun />
                </button>
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
