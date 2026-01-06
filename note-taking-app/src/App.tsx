import { useState } from "react";
import CollectionGrid from "./Component/CollectionGrid";
import DetailPanel from "./Component/DetailPanel";
import { dummyNote } from "./utils/dummyText";
import type { CollectionProps } from "./utils/Type";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [notes, setNotes] = useState<CollectionProps[]>(dummyNote);

    return (
        <BrowserRouter>
            <div className="p-6 flex gap-4 h-screen items-center justify-center ">
                <CollectionGrid notes={notes} setter={setNotes} />
                <Routes>
                    <Route
                        path="/detail/:noteID"
                        element={<DetailPanel notes={notes} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
