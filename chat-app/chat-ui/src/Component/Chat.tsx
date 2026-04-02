import { CircleX, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Chat() {
    const [inputChat, setInputChat] = useState<string>("");
    const [chat, setChat] = useState<string[]>([]);
    const navigate = useNavigate();

    const sendMessage = () => {
        setChat((prev) => [...prev, inputChat]);
        setInputChat("");
    };

    return (
        <main className="flex flex-col h-screen w-screen md:w-200 text-white relative">
            <header className="flex items-center justify-between p-4 border-b">
                <h1 className="font-bold text-[20px]">Public Room</h1>
                {/* Back to previous page */}
                <CircleX onClick={() => navigate(-1)} />
            </header>

            <section className="flex-1 flex flex-col gap-2 m-2 overflow-y-auto min-h-0">
                <div className="mt-auto space-y-4">
                    {chat.map((msg, i) => (
                        <div key={i} className="space-y-1 w-fit max-w-[80%]">
                            <div className="bg-secondary p-2 rounded-lg space-y-2">
                                <p className="font-bold text-[12px]">Andy</p>
                                <p>{msg}</p>
                            </div>
                            <p className="text-[12px]">12:00</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-secondary p-4 md:rounded-lg w-full flex justify-between mt-2 gap-2 outline-none md:mb-5">
                <input
                    type="text"
                    placeholder="type a message"
                    className="w-full outline-none"
                    value={inputChat}
                    onChange={(e) => setInputChat(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage}>
                    <Send className="text-white" />
                </button>
            </section>
        </main>
    );
}

export default Chat;
