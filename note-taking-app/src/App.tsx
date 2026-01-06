import CollectionGrid from "./Component/CollectionGrid";
import DetailPanel from "./Component/DetailPanel";

function App() {
    return (
        <div className="p-6 flex gap-4 h-screen items-center justify-center ">
            <CollectionGrid />
            <DetailPanel />
        </div>
    );
}

export default App;
