import { useState } from "react";

function CurrencyApp() {
    const [isOpen, setIsOpen] = useState(false);
    const [currency, setCurrency] = useState("");

    return (
        <div className="flex w-225 p-2 bg-amber-50 ">
            <div>
                <h1 className="text-2xl font-bold">CURRENCY CONVERTER</h1>
                <div>
                    <p>This money equals to</p>
                    <h1 className="text-4xl">0,0000 This Big Money</h1>
                </div>
                <div className="flex items-center border">
                    <input
                        type="number"
                        placeholder="Type your currency..."
                        className="flex-1 outline-none p-2"
                    />
                    <div className="bg-white p-2 relative">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {currency || "currency"}
                        </button>
                        {isOpen && (
                            <div className="absolute mt-3">
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
                                    <li>EUR</li>
                                    <li>EUR</li>
                                    <li>EUR</li>
                                    <li>EUR</li>
                                    
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h1>Chart goes here</h1>
            </div>
        </div>
    );
}

export default CurrencyApp;
