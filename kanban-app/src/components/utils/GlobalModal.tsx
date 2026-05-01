import { AlertTriangle, Check, Trash, X } from "lucide-react";
import { useModal, useProjectData } from "./store";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function GlobalModal() {
    const { modal, targetType, targetId, closeModal } = useModal();
    const {
        editProjects,
        deleteProjects,
        editBoards,
        editCards,
        deleteBoard,
        deleteCard,
    } = useProjectData();
    const [newName, setNewName] = useState<string>("");

    const handleRename = () => {
        if (targetType === "project") editProjects(targetId, newName);
        if (targetType === "board") editBoards(targetId, newName);
        if (targetType === "card") editCards(targetId, newName);
        setNewName("");
        closeModal();
    };

    const handleDelete = () => {
        if (targetType === "project") deleteProjects(targetId);
        if (targetType === "board") deleteBoard(targetId);
        if (targetType === "card") deleteCard(targetId);

        closeModal();
    };

    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 z-100 flex items-center justify-center"
            >
                <div className="bg-white p-4 w-100 space-y-3 rounded-lg">
                    {modal === "rename" && (
                        <div className="space-y-3">
                            <h1 className="font-semibold text-lg">
                                Rename this {targetType}
                            </h1>
                            <input
                                type="text"
                                className="p-2 w-full bg-gray-300 rounded-sm outline-none"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    className="p-1.5 hover:bg-red-300 rounded-sm font-medium flex gap-2 items-center text-[14px]"
                                    onClick={closeModal}
                                >
                                    <X size={18} color="red" />
                                    <span>Cancel</span>
                                </button>
                                <button
                                    className="p-1.5 hover:bg-green-300 rounded-sm font-medium flex gap-2 items-center text-[14px]"
                                    onClick={handleRename}
                                >
                                    <Check size={18} color="green" />
                                    <span>Rename</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {modal === "delete" && (
                        <div className="space-y-3">
                            <h1 className="flex gap-2 items-center">
                                <AlertTriangle size={18} color="red" />
                                <span className="font-semibold text-lg">
                                    Delete this {targetType}
                                </span>
                            </h1>
                            <p className="text-[14px]">
                                Are you sure to delete this project?. This
                                action can't be undone and will permanently
                                delete your data and its content alongside it
                            </p>
                            <div className="flex justify-end gap-2">
                                <button
                                    className="p-1.5 hover:bg-red-300 rounded-sm font-medium flex gap-2 items-center text-[14px]"
                                    onClick={closeModal}
                                >
                                    <X size={18} color="red" />
                                    <span>Cancel</span>
                                </button>
                                <button
                                    className="p-1.5 hover:bg-green-300 rounded-sm font-medium flex gap-2 items-center text-[14px]"
                                    onClick={handleDelete}
                                >
                                    <Trash size={18} color="green" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </motion.main>
        </AnimatePresence>
    );
}

export default GlobalModal;
