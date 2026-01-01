import Sidebar from "./Component/Sidebar";
import Home from "./Page/Home";

function App() {
    return (
        <div>
            <Sidebar />
            <div className="p-5">
                <Home />
            </div>
        </div>
    );
}

export default App;
