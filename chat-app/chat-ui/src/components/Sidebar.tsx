import { LogIn, Plus, Settings, UserCircle } from "lucide-react";

import { useNavigate } from "react-router";
import { useModal, useRoom, useUserData } from "../store";
import SliderTheme from "./SliderTheme";
import Roomlist from "./Roomlist";

function Sidebar() {
    const navigate = useNavigate();
    const { roomList } = useRoom();
    const { openModal } = useModal();
    const { userData } = useUserData();

    return (
        <main className="bg-sidebar h-full p-3 flex gap-3 flex-col">
            <div className="flex items-center mb-10">
                <h1 className="font-bold text-[20px] flex-1 text-primary-text">
                    U-TALK
                </h1>
                <SliderTheme />
            </div>

            <section className="flex gap-10 justify-center">
                <button
                    className="button bg-accent"
                    onClick={() => openModal("create")}
                >
                    <Plus size={18} />
                    <span>Create</span>
                </button>

                <button
                    className="button bg-accent"
                    onClick={() => openModal("join")}
                >
                    <LogIn size={18} />
                    <span>Join</span>
                </button>
            </section>

            <section className="space-y-4 flex-1">
                <h1 className="text-primary-text">Roomlist</h1>

                <div className="flex flex-col gap-3">
                    {roomList.map((room) => (
                        <Roomlist key={room.roomId} room={room} />
                    ))}
                </div>
            </section>

            {/* Account section */}
            <section className="flex justify-between text-primary-text bg-main-chat items-center p-2 rounded-lg shadow-[0_0_5px_rgba(0,0,0.1)]">
                <div className="flex gap-3 items-center">
                    <div className="bg-message-input w-7.5 h-7.5 grid place-items-center rounded-full text-secondary-text">
                        <UserCircle />
                    </div>
                    <div>
                        <h1 className="font-medium">{`${userData.name ? userData.name : "Guest"}`}</h1>
                        <p className="text-gray-500">
                            #{`${userData.id ? userData.id : "00000"}`}
                        </p>
                    </div>
                </div>
                <Settings onClick={() => navigate("user-setting")} />
            </section>
        </main>
    );
}

export default Sidebar;
