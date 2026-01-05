import React, { useState } from "react";
import TagInput from "./TagInput";
import {
    IoMdAddCircle,
    IoMdArrowDropdown,
    IoMdCloseCircle,
} from "react-icons/io";

interface ModalProps {
    onClose: () => void;
    onSubmit: () => void;
    tag: string;
    data: {
        setTitle: (title: string) => void;
        setContext: (context: string) => void;
        handleTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

function Modal({ onClose, data, onSubmit, tag }: ModalProps) {
    const [inputDropdown, setInputDropdown] = useState<boolean>(false);

    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-bg-primary p-5 w-100 h-100 flex flex-col rounded-xl">
                <section className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Add Task</h1>
                    <button onClick={onClose}>
                        <IoMdCloseCircle />
                    </button>
                </section>
                <section className="flex-1 flex flex-col">
                    <div className="flex flex-col flex-1 gap-5 justify-center">
                        <input
                            type="text"
                            placeholder="Title..."
                            onChange={(e) => data.setTitle(e.target.value)}
                            className="p-2 outline-0 bg-white text-black placeholder:text-black rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Context.."
                            onChange={(e) => data.setContext(e.target.value)}
                            className="p-2 outline-0 bg-white text-black placeholder:text-black rounded-lg"
                        />
                        <div className="relative">
                            <button
                                className="flex w-full justify-between items-center bg-action-button p-2 rounded-lg text-black"
                                onClick={() => setInputDropdown(!inputDropdown)}
                            >
                                {tag ? tag : "Select Tags"}{" "}
                                <IoMdArrowDropdown />
                            </button>

                            {inputDropdown && (
                                <TagInput
                                    handleTagChange={data.handleTagChange}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            className="flex items-center gap-1 bg-red-600 p-2 rounded-lg"
                            onClick={onClose}
                        >
                            Cancel <IoMdCloseCircle />
                        </button>
                        <button
                            className="flex items-center gap-1 bg-green-600 p-2 rounded-lg"
                            onClick={onSubmit}
                        >
                            Add <IoMdAddCircle />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Modal;
