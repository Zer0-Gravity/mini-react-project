import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./MainLayout";

function App() {
    return (
        <main className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
