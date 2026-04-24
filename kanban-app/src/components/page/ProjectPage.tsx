import {
    Filter,
    List,
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
        <main className="h-screen w-screen">
            <section className="p-6 border-b space-y-6">
                <header className="flex items-center justify-between">
                    <h1 className="font-semibold text-[40px]">Example </h1>
                    <div>
                        <Search />
                        <input type="search" placeholder="Search board" />
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
        </main>
    );
}

export default ProjectPage;
