import {
    Hash,
    LogIn,
    Moon,
    MoreHorizontal,
    Plus,
    Settings,
    Sun,
    UserCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useModal, useRoom } from "../store";

function Sidebar() {
    const [theme, setTheme] = useState(() => {
        //Get the saved theme from the local storage
        return localStorage.getItem("theme") === "dark";
    });
    const navigate = useNavigate();
    const { roomList } = useRoom();
    const { openModal } = useModal();

    useEffect(() => {
        const root = window.document.documentElement;

        //Check the theme condition
        if (theme) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <main className="bg-sidebar h-full p-3 flex gap-3 flex-col">
            <div className="flex items-center mb-10">
                <h1 className="font-bold text-[20px] flex-1 text-primary-text">
                    U-TALK
                </h1>
                <button
                    className={`rounded-full p-1 ${theme ? "bg-gray-50" : "bg-gray-800"} `}
                    onClick={() => setTheme(!theme)}
                >
                    {theme ? (
                        <Sun size={20} fill="black" />
                    ) : (
                        <Moon size={20} fill="white" color="white" />
                    )}
                </button>
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
                        <Link
                            to={`/${room.roomId}`}
                            key={room.roomId}
                            className="justify-between flex h-12.5 items-center p-2 rounded-lg bg-accent"
                        >
                            <div className="flex items-center gap-2">
                                <Hash size={18} />
                                <h1 className="font-medium text-[14px]">
                                    {room.roomName}
                                </h1>
                            </div>
                            <MoreHorizontal />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Account section */}
            <section className="flex justify-between text-primary-text bg-main-chat items-center p-2 rounded-lg">
                <div className="flex gap-3 items-center">
                    <div className="bg-message-input w-7.5 h-7.5 grid place-items-center rounded-full text-secondary-text">
                        <UserCircle />
                    </div>
                    <div>
                        <h1 className="font-medium">John Doe</h1>
                        <p className="text-gray-500">#a4hi</p>
                    </div>
                </div>
                <Settings onClick={() => navigate("user-setting")} />
            </section>
        </main>
    );
}

export default Sidebar;
