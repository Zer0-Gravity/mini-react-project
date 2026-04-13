import ChatWindow from "./components/ChatWindow";
import EmptyState from "./components/EmptyState";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <main className="flex h-screen w-screen">
            <Sidebar />
            {/* <ChatWindow /> */}
            <EmptyState />
        </main>
    );
}

export default App;
