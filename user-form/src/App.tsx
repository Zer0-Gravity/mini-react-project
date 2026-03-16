import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import RegisterSuccess from "./Component/Register/RegisterSuccess";
import LoginSuccess from "./Component/Login/LoginSuccess";
import ProtectedRoute from "./Component/Utils/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/register-success"
                        element={<RegisterSuccess />}
                    />
                    <Route path="/login-success" element={<LoginSuccess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
