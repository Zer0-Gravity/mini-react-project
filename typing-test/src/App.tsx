import { BrowserRouter, Route, Routes } from "react-router";
import TypingTest from "./TypingTest";
import Result from "./Component/Result";
import { useState } from "react";

function App() {
    const [score, setScore] = useState<number[]>([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TypingTest score={score} />} />
                <Route
                    path="/result"
                    element={<Result score={score} setScore={setScore} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
