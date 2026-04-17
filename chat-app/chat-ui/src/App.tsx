import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import EmptyState from "./components/EmptyState";
import ChatWindow from "./components/ChatWindow";
import UserSetting from "./components/UserSetting";
import { useEffect } from "react";
import { useTheme } from "./store";

function App() {
    const { isDark } = useTheme(); //Get the dark theme boolean

    useEffect(() => {
        const root = window.document.documentElement;

        //Check the theme condition
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

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
