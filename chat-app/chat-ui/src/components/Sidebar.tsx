import { Hash, LogIn, Moon, MoreHorizontal, Plus, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useModal, useRoom } from "../store";

function Sidebar() {
    const [theme, setTheme] = useState(() => {
        //Get the saved theme from the local storage
        return localStorage.getItem("theme") === "dark";
    });
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
        <main className="bg-sidebar h-full p-3 space-y-5">
            <div className="flex items-center mb-10">
                <h1 className="font-bold text-4xl flex-1 text-center text-primary-text">
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
                    <Plus />
                    <span>Create</span>
                </button>

                <button
                    className="button bg-accent"
                    onClick={() => openModal("join")}
                >
                    <LogIn />
                    <span>Join</span>
                </button>
            </section>

            <section className="space-y-4">
                <h1 className="text-primary-text">Roomlist</h1>

                <div className="flex flex-col gap-3">
                    {roomList.map((room) => (
                        <Link
                            to={`/${room.roomId}`}
                            key={room.roomId}
                            state={{ roomData: room }}
                            className="justify-between flex h-12.5 items-center p-2 rounded-lg bg-accent"
                        >
                            <div className="flex">
                                <Hash />
                                <h1>{room.roomName}</h1>
                            </div>
                            <MoreHorizontal />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Sidebar;
