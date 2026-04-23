import { Copy, Save, Trash, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import type { UserProfile } from "../type";
import { randomId } from "../utils";
import { useUserData } from "../store";
import WarningMessage from "./WarningMessage";

function UserSetting() {
    const navigate = useNavigate();
    const { addUser, userData } = useUserData();
    const timeNotificationRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [displayName, setDisplayName] = useState<string>("");
    const [warn, setWarn] = useState<boolean>(false);
    const [notification, setNotification] = useState<boolean>(false);

    console.log(userData);

    const saveUser = () => {
        //Check if ID already exist if not generate new one if it exist use the old one
        const generatedId = userData.id || randomId(5);

        const newUser: UserProfile = {
            id: generatedId,
            name: displayName,
        };

        //Add data to the object
        addUser(newUser);

        handleNotification();
    };

    const handleNotification = () => {
        //Clear timeout upon unmount
        if (timeNotificationRef.current) {
            clearTimeout(timeNotificationRef.current);
        }

        //Set notification to true
        setNotification(true);

        //Timeout at 1 second
        timeNotificationRef.current = setTimeout(() => {
            setNotification(false);
        }, 1000);
    };

    return (
        <main className="bg-main-chat h-screen w-screen p-5 flex justify-center text-primary-text relative">
            {notification && (
                <div className="absolute bg-green-300 rounded-sm text-black flex gap-2 p-2 border-l-4 border-green-500 ">
                    <Save />
                    <p>Data saved!</p>
                </div>
            )}
            {warn && <WarningMessage setWarn={setWarn} />}
            <div className="md:w-165 w-full">
                <header className="flex justify-between text-primary-text">
                    <h1>User Setting</h1>
                    <XCircle onClick={() => navigate("/")} />
                </header>
                <section className="flex items-center mt-20 flex-col">
                    <div className="setting-form text-secondary-text">
                        {/* Automatic generated id */}
                        <p className="label-id">User ID</p>
                        <div className="flex gap-2 items-center input-id">
                            <input
                                type="text"
                                placeholder="Save to generate code"
                                readOnly
                                className="p-2 h-10 bg-message-input outline-none rounded-[5px]"
                                value={userData.id}
                            />
                            <Copy />
                        </div>

                        {/* Add Username */}
                        <p className="label-name">Display Name</p>
                        <input
                            type="text"
                            className="p-2 h-10 w-75 bg-message-input outline-none input-name rounded-[5px]"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />

                        {/* Save Button */}
                        <button
                            className="p-2 bg-accent save-button text-black font-medium rounded-[5px]"
                            onClick={saveUser}
                        >
                            Save Data
                        </button>

                        {/* More Option */}

                        <p className="label-option">More Option</p>

                        <button
                            className="p-2 rounded-[5px] flex gap-2 text-white bg-red-500 items-center justify-center more-button"
                            onClick={() => setWarn(true)}
                        >
                            <Trash size={18} />
                            <p>Wipe Data</p>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default UserSetting;
