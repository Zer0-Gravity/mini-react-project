import { Outlet, Navigate } from "react-router";
import { useAuthUser } from "../../store";

function ProtectedRoute() {
    const { user, isLoading } = useAuthUser();

    //Prevent redirecting while still on checking cookies
    if (isLoading) return <p>Loading...</p>;

    return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
