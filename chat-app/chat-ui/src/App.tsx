import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import EmptyState from "./components/EmptyState";
import ChatWindow from "./components/ChatWindow";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<EmptyState />} />
                    <Route path="/:roomId" element={<ChatWindow />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
