import { Filter, Plus, Search, SortDesc } from "lucide-react";
import KanbanBoard from "./Kanban/KanbanBoard";
import TabSection from "./TabSection";
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { useProjectData } from "../utils/store";
import NewBoard from "../utils/NewBoard";
import { AnimatePresence, motion } from "motion/react";

function ProjectPage() {
    const [isNewBoard, setIsNewBoard] = useState<boolean>(false);
    const { projects } = useProjectData();

    const { projectId } = useParams();
    const location = useLocation();

    const handleCloseModal = () => {
        setIsNewBoard(false);
    };

    return (
        <AnimatePresence>
            <motion.main
                key={location.pathname}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", damping: 10 }}
                className="h-full w-full flex-col flex relative"
            >
                {isNewBoard && (
                    <NewBoard
                        handleCloseModal={handleCloseModal}
                        id={projectId}
                    />
                )}

                <section className="p-6 border-b space-y-6">
                    <header className="flex items-center justify-between">
                        <h1 className="font-semibold text-[40px]">
                            {projects[projectId].projectName}{" "}
                        </h1>
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
                        <TabSection />
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
                            <button
                                className="button-board bg-gray-600"
                                onClick={() => setIsNewBoard(true)}
                            >
                                <Plus />
                                <p>Add New</p>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Kanban Board section */}
                <KanbanBoard id={projectId} />
            </motion.main>
        </AnimatePresence>
    );
}

export default ProjectPage;
