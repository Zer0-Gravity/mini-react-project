import { BrowserRouter, Route, Routes } from "react-router";
import TypingTest from "./TypingTest";
import Result from "./Component/Result";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TypingTest />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
