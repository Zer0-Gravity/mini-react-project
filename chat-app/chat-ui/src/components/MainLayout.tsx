import { Outlet, useParams } from "react-router";
import Sidebar from "./Sidebar";

function MainLayout() {
    const { roomId } = useParams();

    return (
        <main className="h-screen w-screen flex">
            <div
                className={`${roomId ? "hidden" : "block"} w-full md:w-75 md:block`}
            >
                <Sidebar />
            </div>

            {/* Display the chat window */}
            <div className={`${roomId ? "block" : "hidden"} md:flex md:flex-1`}>
                <Outlet />
            </div>
        </main>
    );
}

export default MainLayout;
