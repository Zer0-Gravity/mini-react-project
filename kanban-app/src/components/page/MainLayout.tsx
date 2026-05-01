import { useModal } from "../utils/store";
import { Outlet } from "react-router";
import GlobalModal from "../utils/GlobalModal";
import Sidebar from "../sidebar/Sidebar";

function MainLayout() {
    const { modal } = useModal();
    return (
        <main className="flex relative">
            {modal && <GlobalModal />}
            <Sidebar />
            <div className="flex-1 min-w-0">
                <Outlet />
            </div>
        </main>
    );
}

export default MainLayout;
