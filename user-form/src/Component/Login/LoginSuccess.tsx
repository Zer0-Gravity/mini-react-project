import { Minus, Plus, Power, RefreshCcw } from "lucide-react";

function LoginSuccess() {
    return (
        <main className="h-screen w-full flex items-center justify-center">
            <section className="flex flex-col mx-auto bg-primary h-full w-full md:w-200 md:h-125 items-center justify-center rounded-xl gap-3">
                <h1 className="text-[30px] font-bold">Welcome, User</h1>
                <p className="text-small">You have logged in, Yay!!</p>
                <div className="flex flex-col items-center md:justify-end">
                    <h1 className="text-[40px] font-bold">0</h1>
                    <div className="space-x-2">
                        <button className="counter-button">
                            <RefreshCcw className="m-auto" />
                        </button>
                        <button className="counter-button">
                            <Plus className="m-auto" />
                        </button>
                        <button className="counter-button">
                            <Minus className="m-auto" />
                        </button>
                    </div>
                </div>
                <button className="w-37.5 h-12.5 bg-button flex items-center justify-center text-white rounded-lg gap-2">
                    <Power size={20} /> <span>Log Out</span>
                </button>
            </section>
        </main>
    );
}

export default LoginSuccess;
