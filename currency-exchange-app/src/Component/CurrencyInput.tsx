import { useState } from "react";

interface Input {
    currency: number | string;
}

function CurrencyInput({ currency }: Input) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center border">
            <input
                type="number"
                placeholder="Type your currency..."
                className="flex-1 outline-none p-2"
            />
            <div className="bg-white p-2 relative">
                {/* Custom Dropdown button */}
                <button onClick={() => setIsOpen(!isOpen)}>
                    {currency || "Currency"}
                </button>
                {isOpen && (
                    <div className="absolute mt-3 bg-gray-400 p-2">
                        <input
                            type="search"
                            placeholder="Search currency"
                            className="border p-2 mb-2"
                        />
                        <ul
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <li>EUR</li>
                            <li>EUR</li>
                            <li>EUR</li>
                            <li>EUR</li>
                            <li>EUR</li>
                            <li>EUR</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyInput;
