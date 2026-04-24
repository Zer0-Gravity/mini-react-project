import { BrowserRouter } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectPage from "./components/page/ProjectPage";

function App() {
    return (
        <BrowserRouter>
            <main className="flex">
                <Sidebar />
                <ProjectPage />
            </main>
        </BrowserRouter>
    );
}

export default App;
