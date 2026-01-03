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
    data: {
        setTitle: (title: string) => void;
        setContext: (context: string) => void;
        handleTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

function Modal({ onClose, data, onSubmit }: ModalProps) {
    const [inputDropdown, setInputDropdown] = useState<boolean>(false);

    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-5">
                <section>
                    <h1>Add Task</h1>
                    <button onClick={onClose}>
                        <IoMdCloseCircle />
                    </button>
                </section>
                <section>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Title..."
                            onChange={(e) => data.setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Context.."
                            onChange={(e) => data.setContext(e.target.value)}
                        />
                        <div>
                            <button
                                className="flex w-full justify-between items-center"
                                onClick={() => setInputDropdown(!inputDropdown)}
                            >
                                Tags <IoMdArrowDropdown />
                            </button>

                            {inputDropdown && (
                                <TagInput
                                    handleTagChange={data.handleTagChange}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="flex items-center" onClick={onClose}>
                            Cancel <IoMdCloseCircle />
                        </button>
                        <button
                            className="flex items-center"
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
