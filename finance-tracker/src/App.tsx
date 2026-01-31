import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";

function App() {
    return (
        <BrowserRouter>
            <main className="flex h-screen w-screen items-center justify-center">
                <section className="flex gap-2">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
