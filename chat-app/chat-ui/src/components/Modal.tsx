import { Save, X } from "lucide-react";
import { useModal } from "../store";

interface ModalType {
    modalType: string;
}

function Modal({ modalType }: ModalType) {
    const { closeModal } = useModal();

    return (
        <section className="inset-0 bg-black/80 h-full w-full absolute flex items-center justify-center">
            <div className="bg-sidebar p-5 md:w-150 w-[90%] space-y-5 rounded-lg">
                <h1 className="text-[25px] font-bold text-primary-text">
                    {modalType === "create" ? "Create Room" : "Join Room"}
                </h1>

                <input
                    type="text"
                    placeholder="Type room name"
                    className="h-14 w-full outline-none bg-message-input p-2 rounded-lg"
                />
                <div className="flex justify-end gap-4">
                    <button className="button bg-red-500" onClick={closeModal}>
                        <X />
                        <p>Close</p>
                    </button>
                    <button className="button bg-accent">
                        <Save />
                        <p>Save</p>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Modal;
