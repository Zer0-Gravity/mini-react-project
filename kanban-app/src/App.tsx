import { BrowserRouter } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectPage from "./components/page/ProjectPage";

function App() {
    return (
        <BrowserRouter>
            <main className="flex">
                <Sidebar />
                <div className="flex-1 min-w-0">
                    <ProjectPage />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
