import { BrowserRouter, Route, Routes } from "react-router";
import ProjectPage from "./components/page/ProjectPage";

import EmptyPage from "./components/page/EmptyPage";
import MainLayout from "./components/page/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<EmptyPage />} />
                    <Route path="/:projectId" element={<ProjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
