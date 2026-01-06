import { LuExternalLink, LuFolder, LuPlus, LuTrash2 } from "react-icons/lu";

function CollectionGrid() {
    return (
        <div className="h-full">
            {/* Header */}
            <header className="flex justify-between">
                <h1>Note Collection</h1>
                <button className="flex">
                    <LuPlus /> New Collection
                </button>
            </header>

            {/* Card List */}
            <section className="flex gap-2">
                <div className="border flex flex-col w-57.5 h-20 p-2 justify-between">
                    <div className="flex">
                        <LuFolder size={25} />
                        <h3>Work</h3>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button>
                            <LuExternalLink />
                        </button>
                        <button>
                            <LuTrash2 />
                        </button>
                    </div>
                </div>
                <div className="border flex flex-col w-57.5 h-20 p-2 justify-between">
                    <div className="flex">
                        <LuFolder size={25} />
                        <h3>Work</h3>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button>
                            <LuExternalLink />
                        </button>
                        <button>
                            <LuTrash2 />
                        </button>
                    </div>
                </div>
                <div className="border flex flex-col w-57.5 h-20 p-2 justify-between">
                    <div className="flex">
                        <LuFolder size={25} />
                        <h3>Work</h3>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button>
                            <LuExternalLink />
                        </button>
                        <button>
                            <LuTrash2 />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CollectionGrid;
