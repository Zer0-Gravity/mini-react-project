import { GripVertical, MoreHorizontal, Plus } from "lucide-react";
import KanbanCard from "./KanbanCard";
import ButtonPopOver from "../../utils/ButtonPopOver";
import { useModal, useProjectData } from "../../utils/store";

interface KanbanBoardProp {
    id: string;
}

function KanbanBoard({ id }: KanbanBoardProp) {
    const { projects, boards } = useProjectData();
    const { openModal } = useModal();
    const projectView = projects[id];

    return (
        <section className="p-5 gap-3 flex overflow-x-auto hide-scroll">
            {projectView.board.map((id) => {
                const board = boards[id];
                const isCardEmpty = boards[id].card.length < 1;

                return (
                    <div
                        key={id}
                        className={`bg-gray-200 w-87.5 p-2 rounded-lg select-none cursor-pointer ${isCardEmpty ? "h-20" : "min-h-20"}`}
                    >
                        {/* Header section */}
                        <header className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GripVertical size={18} />
                                <h1 className="font-semibold">
                                    {board.boardName}
                                </h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonPopOver
                                    item={board.boardId}
                                    icon={MoreHorizontal}
                                    size={18}
                                    onRename={() =>
                                        openModal(
                                            "rename",
                                            board.boardId,
                                            "board",
                                        )
                                    }
                                    onDelete={() =>
                                        openModal(
                                            "delete",
                                            board.boardId,
                                            "board",
                                        )
                                    }
                                />
                                <button className="bg-amber-500 w-7.5 h-7.5 place-items-center grid text-white rounded-[5px]">
                                    <Plus />
                                </button>
                            </div>
                        </header>

                        {/* Card section */}
                        <KanbanCard id={board.boardId} />
                    </div>
                );
            })}
        </section>
    );
}

export default KanbanBoard;
