import { Copy, Download, Trash, XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { UserProfile } from "../type";
import { randomId } from "../utils";
import { useUserData } from "../store";

function UserSetting() {
    const navigate = useNavigate();
    const { addUser, userData } = useUserData();
    const [displayName, setDisplayName] = useState<string>("");

    console.log(userData);

    const saveUser = () => {
        const newUser: UserProfile = {
            id: randomId(5),
            name: displayName,
        };

        addUser(newUser);
    };

    return (
        <main className="bg-main-chat h-screen w-screen p-5 flex justify-center text-primary-text">
            <div className="md:w-165 w-full">
                <header className="flex justify-between text-primary-text">
                    <h1>User Setting</h1>
                    <XCircle onClick={() => navigate("/")} />
                </header>
                <section className="flex items-center mt-20 flex-col">
                    <div className="setting-form">
                        {/* Automatic generated id */}
                        <p className="label-id">User ID</p>
                        <div className="flex gap-2 items-center input-id">
                            <input
                                type="text"
                                placeholder="Save to generate code"
                                readOnly
                                className="p-2 h-10 bg-message-input outline-none rounded-[5px] text-black"
                                value={userData.id}
                            />
                            <Copy />
                        </div>

                        {/* Add Username */}
                        <p className="label-name">Display Name</p>
                        <input
                            type="text"
                            className="p-2 h-10 w-75 bg-message-input outline-none input-name rounded-[5px] text-black"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />

                        {/* Save Button */}
                        <button
                            className="p-2 bg-accent save-button text-secondary-text font-medium rounded-[5px]"
                            onClick={saveUser}
                        >
                            Save Button
                        </button>

                        {/* More Option */}

                        <p className="label-option">More Option</p>

                        <div className="w-full flex flex-col md:flex-row justify-around more-button gap-4">
                            <button className="p-2 rounded-[5px] flex gap-2 text-white bg-green-500 items-center justify-center">
                                <Download size={18} />
                                <p>Download Data</p>
                            </button>
                            <button className="p-2 rounded-[5px] flex gap-2 text-white bg-red-500 items-center justify-center">
                                <Trash size={18} />
                                <p>Wipe Data</p>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default UserSetting;
