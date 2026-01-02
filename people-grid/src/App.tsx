import Sidebar from "./Component/Sidebar";
import Home from "./Page/Home";
import { peopleData } from "./Utils/Data";

function App() {
    return (
        <div>
            <Sidebar />
            <div className="p-5 bg-primary-color h-screen">
                <Home people={peopleData} />
            </div>
        </div>
    );
}

export default App;
