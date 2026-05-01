import { AlertTriangle, Plus, X } from "lucide-react";
import ModalButton from "./ModalButton";
import { useModal, useProjectData } from "./store";
import type { CardType, PriorityType, StatusType } from "./types";
import { randomId } from "./utilsFunction";
import { useState } from "react";

function NewCard() {
    const { closeModal, targetId } = useModal();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const { addCards } = useProjectData();
    const handleAddCard = () => {
        const newCard: CardType = {
            cardId: `CD${randomId(5)}`,
            title: title,
            description: description,
            dateCreated: new Date().toISOString(),
            dateEnd: deadline,
            status: status as StatusType,
            priority: priority as PriorityType,
        };

        if (!title || !description || !deadline || !status || !priority) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);

            return;
        }

        addCards(targetId, newCard);
        closeModal();
    };

    return (
        <main className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white flex flex-col gap-3 p-5 w-112.5 h-150 rounded-lg">
                <h1 className="font-semibold text-lg">Create new card</h1>
                {error && (
                    <div>
                        <AlertTriangle size={14} /> cant be empty
                    </div>
                )}

                <input
                    type="text"
                    placeholder="Card title"
                    className="p-2 bg-gray-100"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="flex-1 p-2 bg-gray-100"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="date"
                    className="p-2"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <select
                    className="p-2 bg-gray-100"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select
                    className="p-2 bg-gray-100"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Review">In Review</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Done">Done</option>
                </select>

                <div className="flex justify-end gap-2">
                    <ModalButton
                        color="red"
                        onClick={closeModal}
                        btnName="Cancel"
                        icon={X}
                    />
                    <ModalButton
                        color="green"
                        onClick={handleAddCard}
                        btnName="Create"
                        icon={Plus}
                    />
                </div>
            </div>
        </main>
    );
}

export default NewCard;
