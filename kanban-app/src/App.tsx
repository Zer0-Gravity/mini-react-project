import { BrowserRouter } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectPage from "./components/page/ProjectPage";
import GlobalModal from "./components/utils/GlobalModal";

function App() {
    return (
        <BrowserRouter>
            <main className="flex relative">
                <GlobalModal />
                <Sidebar />
                <div className="flex-1 min-w-0">
                    <ProjectPage />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
