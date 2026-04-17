import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import EmptyState from "./components/EmptyState";
import ChatWindow from "./components/ChatWindow";
import UserSetting from "./components/Usersetting";

function App() {
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
