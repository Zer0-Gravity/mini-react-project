import { Hash, Image, Plus, Send, User, XCircle } from "lucide-react";

function ChatWindow() {
    return (
        <main className="bg-main-chat w-full h-full p-5 flex flex-col">
            <header className="flex justify-between text-primary-text mb-10">
                <div className="flex gap-2">
                    <Hash />
                    <h1 className="font-semibold ">Public Room</h1>
                </div>
                <XCircle />
            </header>

            <section className="flex-1">
                <div className="flex gap-2">
                    <div className="bg-gray-400 p-2 rounded-full w-7.5 h-7.5">
                        <User size={15} />
                    </div>
                    <div className="bg-sender text-primary-text p-2 rounded-lg max-w-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos quidem deleniti accusantium cupiditate
                        exercitationem, blanditiis corrupti dicta obcaecati
                        neque a? Quo voluptatibus accusamus sit consequatur
                        culpa a. Eveniet, deleniti provident.
                    </div>
                </div>
            </section>

            <section className="bg-message-input w-full flex p-2 rounded-lg items-end">
                <textarea
                    placeholder="Type a message"
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
