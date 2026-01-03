import {
    IoMdAddCircle,
    IoMdArrowDropdown,
    IoMdCloseCircle,
} from "react-icons/io";

interface ModalProps {
    onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
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
                        <input type="text" placeholder="Title..." />
                        <input type="text" placeholder="Context.." />
                        <div>
                            <button className="flex w-full justify-between items-center">
                                Tags <IoMdArrowDropdown />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="flex items-center" onClick={onClose}>
                            Cancel <IoMdCloseCircle />
                        </button>
                        <button className="flex items-center">
                            Add <IoMdAddCircle />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Modal;
