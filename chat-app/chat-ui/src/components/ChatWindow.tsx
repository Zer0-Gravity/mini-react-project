import { Hash, Image, Plus, Send, User, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ChatWindow() {
    const [textMessage, setTextMessage] = useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textAreaRef.current) {
            //Set the start of the height as auto
            textAreaRef.current.style.height = `auto`;
            //set the height following the user input
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    });

    return (
        <main className="bg-main-chat w-full h-full p-5 flex flex-col gap-5">
            <header className="flex justify-between text-primary-text">
                <div className="flex gap-2">
                    <Hash />
                    <h1 className="font-semibold ">Public Room</h1>
                </div>
                <XCircle />
            </header>

            <section className="flex-1 flex flex-col-reverse gap-3 overflow-y-auto hide-scrollbar ">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-2">
                        <div className="bg-gray-400 p-2 rounded-full w-7.5 h-7.5">
                            <User size={15} />
                        </div>
                        <div className="bg-receiver text-primary-text p-3.75 rounded-lg max-w-200 space-y-2">
                            <div className="flex justify-between font-semibold text-[12px]">
                                <p>User</p>
                                <p>14 : 00</p>
                            </div>
                            <p className="text-primary-text text-[14px] font-medium">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos quidem deleniti
                                accusantium cupiditate exercitationem,
                                blanditiis corrupti dicta obcaecati neque a? Quo
                                voluptatibus accusamus sit consequatur culpa a.
                                Eveniet, deleniti provident. Pendejo
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="bg-message-input w-full flex p-2 rounded-lg items-end">
                <textarea
                    ref={textAreaRef}
                    placeholder="Type a message"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    className="w-full flex-1 outline-none p-2 resize-none bg-transparent min-h-10"
                    rows={1}
                />
                <div className="flex gap-2 items-center h-10">
                    <Plus size={20} />
                    <Image size={20} />
                    <button className="bg-accent rounded-full w-10 h-10 flex items-center justify-center">
                        <Send size={20} />
                    </button>
                </div>
            </section>
        </main>
    );
}

export default ChatWindow;
