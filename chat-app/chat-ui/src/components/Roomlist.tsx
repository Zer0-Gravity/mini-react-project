import { Hash, Trash, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { RoomType } from "../type";
import { useRoom } from "../store";

interface RoomlistType {
    room: RoomType;
}

function Roomlist({ room }: RoomlistType) {
    const [roomModal, setRoomModal] = useState<string | null>(null);
    const { deleteRooms } = useRoom();
    const navigate = useNavigate();

    const handleDeleteButton = (id: string) => {
        deleteRooms(id); //Delete room by id
        navigate("/");
    };

    return (
        <Link
            to={`/${room.roomId}`}
            key={room.roomId}
            className="justify-between flex h-12.5 relative items-center p-2 rounded-lg bg-accent"
        >
            <div className="flex items-center gap-2">
                <Hash size={18} />
                <h1 className="font-medium text-[14px]">{room.roomName}</h1>
            </div>
            <div
                className="p-2"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setRoomModal(
                        roomModal === room.roomId ? null : room.roomId,
                    );
                }}
            >
                <Trash size={18} fill="red" />
            </div>

            {roomModal === room.roomId && (
                <div className="absolute bg-amber-400 inset-0 rounded-lg text-[14px] items-center flex p-3">
                    <p className="flex-1 font-medium">Delete room? </p>
                    <div className="flex gap-3">
                        <button
                            className="bg-red-400 flex gap-1 items-center p-2 rounded-lg hover:scale-105"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDeleteButton(room.roomId);
                            }}
                        >
                            Yes
                            <Trash size={14} />
                        </button>
                        <button
                            className="bg-green-400 flex gap-1 items-center p-2 rounded-lg hover:scale-105"
                            onClick={() => setRoomModal(null)}
                        >
                            No
                            <X size={14} />
                        </button>
                    </div>
                </div>
            )}
        </Link>
    );
}

export default Roomlist;
