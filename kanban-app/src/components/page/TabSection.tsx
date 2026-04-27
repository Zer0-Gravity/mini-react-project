import { List, SquareKanban, Table2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const tabs = [
    { id: "Board", icon: <SquareKanban size={20} /> },
    { id: "Table", icon: <Table2 size={20} /> },
    { id: "List", icon: <List size={20} /> },
];

function TabSection() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
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
    );
}

export default TabSection;
