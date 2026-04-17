import { Copy, Download, Trash, XCircle } from "lucide-react";
import { useNavigate } from "react-router";

function UserSetting() {
    const navigate = useNavigate();
    return (
        <main className="bg-main-chat h-screen w-screen p-5 md:flex md:justify-center">
            <div className="md:w-162.5">
                <header className="flex justify-between text-primary-text">
                    <h1>User Setting</h1>
                    <XCircle onClick={() => navigate("/")} />
                </header>

                <section>
                    <div className="flex gap-10">
                        <p>User ID</p>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Save to generate code"
                                readOnly
                            />
                            <Copy />
                        </div>
                    </div>
                    <div className="flex">
                        <p>Display Name</p>
                        <input type="text" />
                    </div>
                    <button>Save Button</button>
                </section>

                <section>
                    <div className="flex items-center">
                        <p>More Option</p>
                        <div className="h-0.5 w-full bg-black" />
                    </div>
                    <div>
                        <button className="button">
                            <Download />
                            <p>Download Data</p>
                        </button>
                        <button className="button">
                            <Trash />
                            <p>Wipe Data</p>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default UserSetting;
