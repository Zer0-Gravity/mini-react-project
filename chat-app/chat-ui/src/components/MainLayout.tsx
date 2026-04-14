import { Outlet, useParams } from "react-router";
import Sidebar from "./Sidebar";
import { useModal } from "../store";
import Modal from "./Modal";

function MainLayout() {
    const { roomId } = useParams();
    const { modalType } = useModal();

    return (
        <main className="h-screen w-screen flex relative">
            {/* Modal here baby */}
            {modalType && <Modal modalType={modalType} />}

            <div
                className={`${roomId ? "hidden" : "block"} w-full md:w-75 md:block`}
            >
                <Sidebar />
            </div>

            {/* Display the chat window */}
            <div
                className={`${roomId ? "block" : "hidden"} md:flex md:flex-1 w-full`}
            >
                <Outlet />
            </div>
        </main>
    );
}

export default MainLayout;
