import { BrowserRouter } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );
}

export default App;
