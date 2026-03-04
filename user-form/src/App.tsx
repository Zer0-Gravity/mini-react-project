import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
