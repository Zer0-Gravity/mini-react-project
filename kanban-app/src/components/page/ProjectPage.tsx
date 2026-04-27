import { Filter, Plus, Search, SortDesc } from "lucide-react";
import KanbanBoard from "./Kanban/KanbanBoard";
import TabSection from "./TabSection";

function ProjectPage() {
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
                        <button className="button-board bg-gray-600">
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
