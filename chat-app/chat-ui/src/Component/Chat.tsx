import { Send } from "lucide-react";

function Chat() {
    return (
        <main className="flex flex-col h-screen w-screen md:w-200 pt-10  text-white relative">
            <section className="flex-1 flex flex-col justify-end p-2">
                <p>
                    Hello this is message that i work on, who are you today is
                    good day, doesnt it huehhue so technically iam free you
                    know?
                </p>
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
