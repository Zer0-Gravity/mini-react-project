import { CircleX, Send } from "lucide-react";
import { useNavigate } from "react-router";

function Chat() {
    const navigate = useNavigate();

    return (
        <main className="flex flex-col h-screen w-screen md:w-200 text-white relative">
            <header className="flex items-center justify-between p-4 border-b">
                <h1 className="font-bold text-[20px]">Public Room</h1>
                {/* Back to previous page */}
                <CircleX onClick={() => navigate(-1)} />
            </header>

            <section className="flex-1 flex flex-col gap-2 m-2 overflow-y-auto min-h-0">
                <div className="mt-auto space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="space-y-1 max-w-[80%]">
                            <div className="bg-secondary p-2 rounded-lg space-y-2">
                                <p className="font-bold text-[12px]">Andy</p>
                                <p>
                                    Hello this is message that i work on, who
                                    are you today is good day, doesnt it huehhue
                                    so technically iam free you know?
                                </p>
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
                />
                <button>
                    <Send className="text-white" />
                </button>
            </section>
        </main>
    );
}

export default Chat;
