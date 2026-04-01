import { Send, UserCircle2 } from "lucide-react";

function Chat() {
    return (
        <main className="flex flex-col h-screen w-screen md:w-200 pt-10 pb-10">
            <h1 className="font-bold text-[25px]">Socket.io Group Chat</h1>
            <h2 className="text-xl text-center mt-5">Hello, Guest!!</h2>

            <section className="flex-1 flex flex-col justify-end p-2">
                <div className="flex gap-5 items-start">
                    <UserCircle2 />
                    <div className="flex flex-col gap-1 p-2 min-w-70">
                        <div className="flex justify-between font-semibold text-red-500">
                            <p>Guest</p>
                            <p>16:20</p>
                        </div>
                        <p>
                            Hello this is message that i work on, who are you
                            today is good day
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-300 p-4 rounded-lg w-full flex justify-between mt-10 gap-2 outline-none">
                <input
                    type="text"
                    placeholder="type a message"
                    className="w-full outline-none"
                />
                <button>
                    <Send className="text-white" />
                </button>
            </section>
        </main>
    );
}

export default Chat;
