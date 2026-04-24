import {
    ChevronRight,
    FolderClosed,
    LogOut,
    Plus,
    Sun,
    User,
} from "lucide-react";

function Sidebar() {
    return (
        <main className="w-75 border-r h-screen p-4 flex flex-col gap-4">
            {/* Button Section */}
            <section className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-300 rounded-[5px]">
                    <Plus />
                    <p className="font-semibold">Create Project</p>
                </button>
                <input
                    type="text"
                    className="w-10 h-8.75 bg-orange-300 rounded-[5px]"
                />
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
