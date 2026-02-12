import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import History from "./Pages/History";
import Goal from "./Pages/Goal";
import TransactionWindow from "./Component/TransactionWindow";
function App() {
    return (
        <BrowserRouter>
            <main className="flex h-screen w-screen items-center justify-center">
                <section className="flex gap-2">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/transaction" element={<History />} />
                        <Route path="/goal" element={<Goal />} />
                        <Route
                            path="/transaction-window"
                            element={<TransactionWindow />}
                        />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
