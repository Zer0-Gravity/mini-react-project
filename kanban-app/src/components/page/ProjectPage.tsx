import {
    Filter,
    GripVertical,
    List,
    MoreHorizontal,
    Plus,
    Search,
    SortDesc,
    SquareKanban,
    Table2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const tabs = [
    { id: "Board", icon: <SquareKanban size={20} /> },
    { id: "Table", icon: <Table2 size={20} /> },
    { id: "List", icon: <List size={20} /> },
];

function ProjectPage() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <main className="h-full w-full flex-col flex">
            <section className="p-6 border-b space-y-6">
                <header className="flex items-center justify-between">
                    <h1 className="font-semibold text-[40px]">Example </h1>
                    <div className="flex gap-2 items-center bg-gray-200 h-10 w-75 p-2 rounded-lg">
                        <Search size={18} />
                        <input
                            type="search"
                            placeholder="Search board"
                            className="outline-none w-full h-full"
                        />
                    </div>
                </header>

                <div className="flex items-center justify-between">
                    {/* Tab button */}
                    <div className="bg-gray-300 rounded-[5px] p-2 flex gap-5">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`relative w-25 h-10 ${activeTab === tab.id ? "text-white" : "text-black/40"} transition-colors grid place-items-center`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-amber-600 z-0 rounded-[5px]"
                                        layoutId="activePill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                <div className="flex items-center gap-2 relative z-10">
                                    {tab.icon} <span>{tab.id}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Other utility button */}
                    <div className="flex items-center gap-4">
                        <button className="button-board bg-gray-600">
                            <Filter />
                            <p>Filter</p>
                        </button>
                        <button className="button-board bg-gray-600">
                            <SortDesc />
                            <p>Sort</p>
                        </button>
                        <button className="button-board bg-gray-600">
                            <Plus />
                            <p>Add New</p>
                        </button>
                    </div>
                </div>
            </section>

            <section className="p-5 gap-3 flex overflow-x-auto hide-scroll">
                {["To-Do", "Working", "Research", "Done", "On Hold"].map(
                    (item, i) => (
                        <div
                            key={i}
                            className="bg-gray-200 min-w-87.5 min-h-20 p-2 rounded-lg"
                        >
                            <header className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <GripVertical size={18} />
                                    <h1 className="font-semibold">{item}</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MoreHorizontal size={18} />
                                    <button className="bg-amber-500 w-7.5 h-7.5 place-items-center grid text-white rounded-[5px]">
                                        <Plus />
                                    </button>
                                </div>
                            </header>
                        </div>
                    ),
                )}
            </section>
        </main>
    );
}

export default ProjectPage;
