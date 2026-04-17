import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import EmptyState from "./components/EmptyState";
import ChatWindow from "./components/ChatWindow";
import UserSetting from "./components/UserSetting";
import { useEffect } from "react";
import { useRoom, useTheme } from "./store";
import { socket } from "./socket";

function App() {
    const { isDark } = useTheme(); //Get the dark theme boolean
    const { addMessages } = useRoom();

    useEffect(() => {
        const root = window.document.documentElement;

        //Check the theme condition
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    useEffect(() => {
        //Receive an incoming message to the array object
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const receiveMessage = (data: any) => {
            addMessages(data.newMessage, data.roomId);
        };
        socket.on("receive_message", receiveMessage);

        return () => {
            //Clear when unmount
            socket.off("receive_message", receiveMessage);
        };
    }, [addMessages]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<EmptyState />} />
                    <Route path="/:roomId" element={<ChatWindow />} />
                </Route>

                <Route path="user-setting" element={<UserSetting />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
