import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <main className="flex h-screen w-screen">
            <Sidebar />
            <ChatWindow />
        </main>
    );
}

export default App;
