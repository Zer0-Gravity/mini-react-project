import { Hash, LogIn, MoreHorizontal, Plus } from "lucide-react";

function Sidebar() {
    return (
        <main className="bg-amber-100 h-screen md:w-75 p-3 space-y-5">
            <h1 className="font-bold text-4xl text-center mb-10">U-TALK</h1>

            <section className="flex gap-10 justify-center">
                <button className="button">
                    <Plus />
                    <span>Create</span>
                </button>

                <button className="button">
                    <LogIn />
                    <span>Join</span>
                </button>
            </section>

            <section className="space-y-4">
                <h1>Roomlist</h1>

                <div>
                    <div className="justify-between flex border h-12.5 items-center p-2 rounded-lg">
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
