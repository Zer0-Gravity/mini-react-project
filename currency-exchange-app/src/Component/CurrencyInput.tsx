import {
    AU,
    BG,
    BR,
    CA,
    CH,
    CN,
    CZ,
    DK,
    EU,
    GB,
    HK,
    HU,
    ID,
    IL,
    IN,
    IS,
    JP,
    KR,
    MX,
    MY,
    NO,
    NZ,
    PH,
    PL,
    RO,
    SE,
    SG,
    TH,
    TR,
    US,
    ZA,
} from "country-flag-icons/react/1x1";
import React, {
    useState,
    type Dispatch,
    type ReactElement,
    type SetStateAction,
} from "react";

interface Input {
    setValue: Dispatch<SetStateAction<string>>;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    amount: number;
}

function CurrencyInput({ setValue, handleInput, amount }: Input) {
    const [isOpen, setIsOpen] = useState(false);
    const [currency, setCurrency] = useState<string>("");
    const [flag, setFlag] = useState<ReactElement>();
    const [search, setSearch] = useState<string>("");

    const currencyData = [
        { currency: "AUD", flagCode: <AU className="w-7 rounded-full" /> },
        { currency: "BGN", flagCode: <BG className="w-7 rounded-full" /> },
        { currency: "BRL", flagCode: <BR className="w-7 rounded-full" /> },
        { currency: "CAD", flagCode: <CA className="w-7 rounded-full" /> },
        { currency: "CHF", flagCode: <CH className="w-7 rounded-full" /> },
        { currency: "CNY", flagCode: <CN className="w-7 rounded-full" /> },
        { currency: "CZK", flagCode: <CZ className="w-7 rounded-full" /> },
        { currency: "DKK", flagCode: <DK className="w-7 rounded-full" /> },
        { currency: "EUR", flagCode: <EU className="w-7 rounded-full" /> },
        { currency: "GBP", flagCode: <GB className="w-7 rounded-full" /> },
        { currency: "HKD", flagCode: <HK className="w-7 rounded-full" /> },
        { currency: "HUF", flagCode: <HU className="w-7 rounded-full" /> },
        { currency: "IDR", flagCode: <ID className="w-7 rounded-full" /> },
        { currency: "ILS", flagCode: <IL className="w-7 rounded-full" /> },
        { currency: "INR", flagCode: <IN className="w-7 rounded-full" /> },
        { currency: "ISK", flagCode: <IS className="w-7 rounded-full" /> },
        { currency: "JPY", flagCode: <JP className="w-7 rounded-full" /> },
        { currency: "KRW", flagCode: <KR className="w-7 rounded-full" /> },
        { currency: "MXN", flagCode: <MX className="w-7 rounded-full" /> },
        { currency: "MYR", flagCode: <MY className="w-7 rounded-full" /> },
        { currency: "NOK", flagCode: <NO className="w-7 rounded-full" /> },
        { currency: "NZD", flagCode: <NZ className="w-7 rounded-full" /> },
        { currency: "PHP", flagCode: <PH className="w-7 rounded-full" /> },
        { currency: "PLN", flagCode: <PL className="w-7 rounded-full" /> },
        { currency: "RON", flagCode: <RO className="w-7 rounded-full" /> },
        { currency: "SEK", flagCode: <SE className="w-7 rounded-full" /> },
        { currency: "SGD", flagCode: <SG className="w-7 rounded-full" /> },
        { currency: "THB", flagCode: <TH className="w-7 rounded-full" /> },
        { currency: "TRY", flagCode: <TR className="w-7 rounded-full" /> },
        { currency: "USD", flagCode: <US className="w-7 rounded-full" /> },
        { currency: "ZAR", flagCode: <ZA className="w-7 rounded-full" /> },
    ];

    const handleValue = (currency: string, flagCode: ReactElement) => {
        setCurrency(currency);
        setFlag(flagCode);
        setValue(currency);
    };

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredItem = currencyData.filter(({ currency }) => {
        return currency.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

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
                    {currency ? (
                        <div className="flex items-center gap-1">
                            <h1>{currency}</h1>
                            <span>{flag}</span>
                        </div>
                    ) : (
                        "Currency"
                    )}
                </button>
                {isOpen && (
                    <div className="absolute mt-3 bg-gray-400 p-2 max-h-100 overflow-hidden overflow-y-auto">
                        <input
                            type="search"
                            placeholder="Search currency"
                            className="border p-2 mb-2"
                            value={search}
                            onChange={handleSearchInput}
                        />
                        <ul
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {filteredItem.length > 0 ? (
                                filteredItem.map((item, index) => (
                                    <label
                                        className="flex justify-between p-2 hover:bg-amber-200"
                                        onClick={() =>
                                            handleValue(
                                                item.currency,
                                                item.flagCode
                                            )
                                        }
                                    >
                                        <li key={index}>{item.currency}</li>
                                        <span>{item.flagCode}</span>
                                    </label>
                                ))
                            ) : (
                                <p>Country not found</p>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyInput;
