import { Hash, LogIn, Moon, MoreHorizontal, Plus, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Sidebar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <main className="bg-sidebar h-screen md:w-75 p-3 space-y-5">
            <div className="flex items-center">
                <h1 className="font-bold text-4xl mb-10 flex-1 text-center">
                    U-TALK
                </h1>
                <button
                    className="border rounded-full"
                    onClick={() => setTheme(!theme)}
                >
                    {theme ? <Sun /> : <Moon />}
                </button>
            </div>

            <section className="flex gap-10 justify-center">
                <button className="button bg-accent">
                    <Plus />
                    <span>Create</span>
                </button>

                <button className="button bg-accent">
                    <LogIn />
                    <span>Join</span>
                </button>
            </section>

            <section className="space-y-4">
                <h1>Roomlist</h1>

                <div>
                    <div className="justify-between flex h-12.5 items-center p-2 rounded-lg bg-accent">
                        <div className="flex">
                            <Hash />
                            <h1>Public room</h1>
                        </div>
                        <MoreHorizontal />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Sidebar;
