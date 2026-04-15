import { Save, X } from "lucide-react";
import { useModal, useRoom } from "../store";
import type { MessagesObj, RoomType } from "../type";
import { randomId } from "../utils";
import { useState } from "react";
import { useNavigate } from "react-router";

interface ModalType {
    modalType: string;
}

function Modal({ modalType }: ModalType) {
    const { closeModal } = useModal();
    const { addRooms, roomList } = useRoom();
    const [nameInput, setNameInput] = useState<string>("");
    const [inputId, setInputId] = useState<string>("");
    const navigate = useNavigate();
    const roomId = roomList.map((room) => room.roomId).toString();

    const createRoom = () => {
        const newRoom: RoomType = {
            roomId: randomId(8),
            roomName: nameInput,
            messages: [] as MessagesObj[],
        };

        //Add new room to the array collection
        addRooms(newRoom);
        setNameInput("");
        closeModal();
    };

    const joinRoom = () => {
        const newJoin: RoomType = {
            roomId: inputId,
            roomName: nameInput,
            messages: [] as MessagesObj[],
        };

        if (inputId === roomId) {
            alert("You already join the room");
        }

        addRooms(newJoin);
        setInputId("");
        setNameInput("");
        closeModal();
        navigate(`/${inputId}`);
    };

    return (
        <section className="inset-0 bg-black/80 h-full w-full absolute flex items-center justify-center">
            <div className="bg-sidebar p-5 md:w-150 w-[90%] space-y-5 rounded-lg">
                <h1 className="text-[25px] font-bold text-primary-text">
                    {modalType === "create" ? "Create Room" : "Join Room"}
                </h1>

                <input
                    type="text"
                    placeholder="Type room name"
                    className="input-modal bg-message-input"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter room ID"
                    className={`input-modal bg-message-input ${modalType === "create" ? "hidden" : "block"}`}
                    value={inputId}
                    onChange={(e) => setInputId(e.target.value)}
                />

                <div className="flex justify-end gap-4">
                    <button className="button bg-red-500" onClick={closeModal}>
                        <X />
                        <p>Close</p>
                    </button>
                    <button
                        className="button bg-accent"
                        onClick={() =>
                            modalType === "create" ? createRoom() : joinRoom()
                        }
                    >
                        <Save />
                        <p>{modalType === "create" ? "Create" : "Join"}</p>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Modal;
