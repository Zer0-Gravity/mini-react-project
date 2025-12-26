import React, { useState, type Dispatch, type SetStateAction } from "react";

interface Input {
    setValue: Dispatch<SetStateAction<string>>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    amount: number;
}

function CurrencyInput({ setValue, handleInput, amount }: Input) {
    const [isOpen, setIsOpen] = useState(false);
    const [currency, setCurrency] = useState<string>("");

    const currencyData = [
        "AUD",
        "BGN",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "EUR",
        "GBP",
        "HKD",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "ISK",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PHP",
        "PLN",
        "RON",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "USD",
        "ZAR",
    ];

    const handleValue = (currency: string) => {
        setCurrency(currency);
        setValue(currency);
    };

    return (
        <div className="flex items-center border">
            <input
                type="number"
                placeholder="Type your currency..."
                className="flex-1 outline-none p-2"
                value={amount}
                onChange={handleInput}
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
                            {currencyData.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleValue(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyInput;
