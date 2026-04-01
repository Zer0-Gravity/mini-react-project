import { CircleX, Send, Settings, UserCircle2 } from "lucide-react";
import { useState } from "react";

function Chat() {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <main className="flex flex-col h-screen w-screen md:w-200 pt-10 pb-10 text-white relative">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[25px]">Socket.io Group Chat</h1>
                <Settings onClick={() => setModal(!modal)} />
            </div>

            {modal && (
                <main className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <section className="w-80 flex flex-col justify-between p-3 bg-secondary space-y-2 rounded-lg">
                        <header className="flex justify-between items-center w-full">
                            <h1 className="font-bold rounded-lg">Setting</h1>
                            <CircleX
                                onClick={() => setModal(false)}
                                size={20}
                            />
                        </header>
                        <div className="space-y-5">
                            <label htmlFor="inputName">Change username</label>
                            <input
                                type="text"
                                id="inputName"
                                className="border-primary border px-2 py-1 outline-none w-full"
                            />
                            <button className="flex justify-end bg-green-400 px-3 py-1 rounded-xs">
                                Save
                            </button>
                        </div>
                    </section>
                </main>
            )}

            <h2 className="text-xl text-center mt-5">Hello, Guest!!</h2>

            <section className="flex-1 flex flex-col justify-end p-2">
                <div className="flex gap-5 ">
                    <UserCircle2 />
                    <div className="flex flex-col gap-1 p-2 min-w-70">
                        <div className="flex justify-between font-semibold text-red-500">
                            <p>Guest</p>
                            <p>16:20</p>
                        </div>
                        <p>
                            Hello this is message that i work on, who are you
                            today is good day, doesnt it huehhue so technically
                            iam free you know?
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-secondary p-4 md:rounded-lg w-full flex justify-between mt-10 gap-2 outline-none">
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
