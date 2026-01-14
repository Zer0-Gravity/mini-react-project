import type { Dispatch, SetStateAction } from "react";
import { IoMdCloseCircle } from "react-icons/io";

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
            <div className="bg-primary-color flex flex-col w-[500px] gap-3 p-5 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">
                        Add new collection
                    </h1>
                    <IoMdCloseCircle
                        size={25}
                        onClick={onClose}
                        color="white
                    "
                    />
                </div>
                <input
                    type="text"
                    placeholder="Collection name..."
                    onChange={handleTitleCollection}
                    className="outline-none p-2 bg-third-color rounded-lg"
                />
                <textarea
                    placeholder="Add description"
                    className="resize-none outline-none bg-third-color h-20 p-2 rounded-lg"
                    onChange={handleDescCollection}
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="w-20 py-1.5 rounded-lg bg-secondary-color"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={inputHandler.addNewCollection}
                        className="w-20 py-1.5 rounded-lg bg-secondary-color"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
