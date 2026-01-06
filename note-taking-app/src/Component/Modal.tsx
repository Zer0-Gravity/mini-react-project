import type { Dispatch, SetStateAction } from "react";

interface ModalProps {
    onClose: () => void;
    inputHandler: {
        setCollectionTitle: Dispatch<SetStateAction<string>>;
        setCollectionDesc: Dispatch<SetStateAction<string>>;
        addNewCollection: () => void;
    };
}

function Modal({ onClose, inputHandler }: ModalProps) {
    const handleTitleCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputHandler.setCollectionTitle(e.target.value);
    };

    const handleDescCollection = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        inputHandler.setCollectionDesc(e.target.value);
    };

    return (
        <div className="absolute bg-black/50 inset-0 flex items-center justify-center top-0">
            <div className="bg-white flex flex-col">
                <h1>Add new collection</h1>
                <input
                    type="text"
                    placeholder="Collection name..."
                    onChange={handleTitleCollection}
                />
                <textarea
                    placeholder="Add description"
                    className="resize-none"
                    onChange={handleDescCollection}
                />
                <div className="flex-">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={inputHandler.addNewCollection}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
