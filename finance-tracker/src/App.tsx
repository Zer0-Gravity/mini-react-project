import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import History from "./Pages/History";
import Goal from "./Pages/Goal";
import TransactionWindow from "./Component/TransactionWindow";
import GoalWindow from "./Component/GoalWindow";
import GoalDetail from "./Component/GoalDetail";
import FunForm from "./Component/FunForm";
import TransferMoney from "./Component/TransferMoney";

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
                        <Route path="/goal-window" element={<GoalWindow />} />
                        <Route
                            path="/goal-detail/:goalId"
                            element={<GoalDetail />}
                        />
                        <Route
                            path="/add-fund-form/:goalId"
                            element={<FunForm />}
                        />
                        <Route
                            path="/send"
                            element={
                                <TransferMoney
                                    value="Send Money"
                                    type="Sended"
                                />
                            }
                        />
                        <Route
                            path="/receive"
                            element={
                                <TransferMoney
                                    value="Receive Money"
                                    type="Received"
                                />
                            }
                        />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
