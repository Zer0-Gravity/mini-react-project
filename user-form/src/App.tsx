import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import RegisterSuccess from "./Component/Register/RegisterSuccess";
import LoginSuccess from "./Component/Login/LoginSuccess";
import ProtectedRoute from "./Component/Utils/ProtectedRoute";
import { useEffect } from "react";
import axios from "axios";
import { useAuthUser } from "./store";

function App() {
    const { setUser } = useAuthUser();

    //verify the refresh token if it exist
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3500/api/refresh",
                    { withCredentials: true },
                );
                setUser(response.data);
            } catch (error) {
                console.log("Error occurred", error);
            }
        };

        verifyRefreshToken();
    }, [setUser]);

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
