import { GripVertical, MoreHorizontal, Plus } from "lucide-react";
import KanbanCard from "./KanbanCard";
import ButtonPopOver from "../../utils/ButtonPopOver";

function KanbanBoard() {
    return (
        <section className="p-5 gap-3 flex overflow-x-auto hide-scroll">
            {["To-Do", "Working", "Research", "Done", "On Hold"].map(
                (item, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 min-w-87.5 min-h-20 p-2 rounded-lg select-none cursor-pointer"
                    >
                        {/* Header section */}
                        <header className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GripVertical size={18} />
                                <h1 className="font-semibold">{item}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonPopOver
                                    item={item}
                                    icon={MoreHorizontal}
                                    size={18}
                                />
                                <button className="bg-amber-500 w-7.5 h-7.5 place-items-center grid text-white rounded-[5px]">
                                    <Plus />
                                </button>
                            </div>
                        </header>

                        {/* Card section */}
                        <KanbanCard />
                    </div>
                ),
            )}
        </section>
    );
}

export default KanbanBoard;
