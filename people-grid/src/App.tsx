import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Home from "./Page/Home";
import { peopleData } from "./Utils/Data";
import type { PeopleProps } from "./Utils/Type";

function App() {
    const [people, setAddPeople] = useState<PeopleProps[]>(peopleData);

    return (
        <div>
            <Sidebar />
            <div className="p-5">
                <Home people={people} />
            </div>
        </div>
    );
}

export default App;
