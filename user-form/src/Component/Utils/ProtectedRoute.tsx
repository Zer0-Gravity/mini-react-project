import { Outlet, Navigate } from "react-router";

function ProtectedRoute() {
    const isAuthenticated = document.cookie.includes("jwt");

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
