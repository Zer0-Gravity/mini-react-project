import { BrowserRouter, Route, Routes } from "react-router";
import Chat from "./Component/Chat";
import Home from "./Component/Home";

function App() {
    return (
        <BrowserRouter>
            <main className="bg-primary h-screen w-screen flex justify-center items-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/public" element={<Chat />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
