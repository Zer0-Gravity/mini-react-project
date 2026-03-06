import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import RegisterSuccess from "./Component/Register/RegisterSuccess";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-success" element={<RegisterSuccess />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
