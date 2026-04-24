import { Filter, Plus, Search, SortDesc } from "lucide-react";

function ProjectPage() {
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
                    <div></div>

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
