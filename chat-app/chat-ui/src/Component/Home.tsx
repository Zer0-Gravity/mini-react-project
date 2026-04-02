import { Hash, Settings } from "lucide-react";

function Home() {
    return (
        <main className="h-full w-full flex flex-col items-center gap-5 text-white">
            <header className="flex justify-between items-center w-full md:w-200 p-4 border-b border-b-white">
                <h1 className="font-bold text-[20px]">U-Talk</h1>
                <Settings size={20} color="white" />
            </header>

            <section className="flex items-center gap-2 md:w-200 cursor-pointer p-2 rounded-lg w-full ">
                <Hash color="white" />
                <div>
                    <h1 className="font-semibold text-[18px]">Public Room</h1>
                    <p className="text-gray-400">Andy : Yo this is fire</p>
                </div>
            </section>

            <section className="w-full md:w-200">
                <div className="flex justify-between px-4 py-2 border-b w-[90%] md:w-full m-auto">
                    <h1 className="font-semibold text-[18px]">Room List</h1>
                    <div className="flex gap-5">
                        <h1 className="flex items-center gap-2 underline cursor-pointer">
                            Create
                        </h1>
                        <h1 className="flex items-center gap-2 underline cursor-pointer">
                            Join
                        </h1>
                    </div>
                </div>

                {/* Server list array */}
                <div className="flex flex-col gap-3">
                    <div>
                        <div className="flex items-center gap-2 md:w-200 cursor-pointer p-2 rounded-lg w-full">
                            <Hash color="white" />
                            <div>
                                <h1 className="font-semibold text-[18px]">
                                    Group Project
                                </h1>
                                <p className="text-gray-400">Andy : Hell nah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
