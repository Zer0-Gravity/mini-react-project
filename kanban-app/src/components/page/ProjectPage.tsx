import { Filter, Plus, Search, SortDesc, X } from "lucide-react";
import KanbanBoard from "./Kanban/KanbanBoard";
import TabSection from "./TabSection";
import { useState } from "react";
import ModalButton from "../utils/ModalButton";

function ProjectPage() {
    const [isNewBoard, setIsNewBoard] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsNewBoard(false);
    };

    return (
        <main className="h-full w-full flex-col flex relative">
            {isNewBoard && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/2">
                    <div className="bg-white shadow-[0px_4px_10px_10px_rgba(0,0,0,0.2)] p-3 rounded-lg space-y-3 w-100">
                        <h1 className="font-semibold text-lg">
                            Create new board
                        </h1>
                        <input
                            type="text"
                            className="p-2 w-full bg-gray-300 rounded-sm outline-none"
                            placeholder="Board name"
                        />
                        <div className="flex justify-end gap-2">
                            <ModalButton
                                color="red"
                                onClick={handleCloseModal}
                                btnName="Cancel"
                                icon={X}
                            />
                            <ModalButton
                                color="green"
                                onClick={handleCloseModal}
                                btnName="Create"
                                icon={Plus}
                            />
                        </div>
                    </div>
                </div>
            )}

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
            <KanbanBoard />
        </main>
    );
}

export default ProjectPage;
