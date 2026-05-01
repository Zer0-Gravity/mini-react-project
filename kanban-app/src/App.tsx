import { BrowserRouter } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectPage from "./components/page/ProjectPage";
import GlobalModal from "./components/utils/GlobalModal";
import { useModal } from "./components/utils/store";
import EmptyPage from "./components/page/EmptyPage";

function App() {
    const { modal } = useModal();

    return (
        <BrowserRouter>
            <main className="flex relative">
                {modal && <GlobalModal />}
                <Sidebar />
                <div className="flex-1 min-w-0">
                    {/* <ProjectPage /> */}
                    <EmptyPage />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
