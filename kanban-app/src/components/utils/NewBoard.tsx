import { Plus, X } from "lucide-react";
import ModalButton from "./ModalButton";
import { randomId } from "./utilsFunction";
import type { BoardType } from "./types";
import { useState } from "react";
import { useProjectData } from "./store";

interface NewBoardProp {
    handleCloseModal: () => void;
    id: string;
}

function NewBoard({ handleCloseModal, id }: NewBoardProp) {
    const [boardName, setBoardName] = useState<string>("");
    const { addBoards } = useProjectData();

    const handleAddNewBoard = () => {
        const newBoard: BoardType = {
            boardId: `BD${randomId(5)}`,
            boardName: boardName,
            card: [],
        };

        addBoards(id, newBoard);
        setBoardName("");
        handleCloseModal();
    };

    return (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/2">
            <div className="bg-white shadow-[0px_4px_10px_10px_rgba(0,0,0,0.2)] p-3 rounded-lg space-y-3 w-100">
                <h1 className="font-semibold text-lg">Create new board</h1>
                <input
                    type="text"
                    className="p-2 w-full bg-gray-300 rounded-sm outline-none"
                    placeholder="Board name"
                    onChange={(e) => setBoardName(e.target.value)}
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
                        onClick={handleAddNewBoard}
                        btnName="Create"
                        icon={Plus}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewBoard;
