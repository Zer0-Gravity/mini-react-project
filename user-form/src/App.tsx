import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import RegisterSuccess from "./Component/Register/RegisterSuccess";
import LoginSuccess from "./Component/Login/LoginSuccess";
import ProtectedRoute from "./Component/Utils/ProtectedRoute";
import { useEffect } from "react";
import axios from "axios";
import { useAuthUser, useDataAuth } from "./store";

function App() {
    const { setUser } = useAuthUser();
    const { setData } = useDataAuth();

    //verify the refresh token if it exist
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3500/api/refresh",
                    { withCredentials: true },
                );
                const { accessToken, userData } = response.data;

                //Get the access Token
                setUser(accessToken);

                //Get the data from the server side
                setData(userData);
            } catch (error) {
                console.log("Error occurred", error);
            }
        };

        verifyRefreshToken();
    }, [setUser, setData]);

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
