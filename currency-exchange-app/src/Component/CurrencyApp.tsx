import { useState } from "react";
import CurrencyInput from "./CurrencyInput";

function CurrencyApp() {
    let [currency, setCurrency] = useState<number | string>("");

    currency = 20;

    return (
        <div className="flex w-225 p-2 bg-amber-50 ">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">CURRENCY CONVERTER</h1>
                <div>
                    <p>This money equals to</p>
                    <h1 className="text-4xl">0,0000 This Big Money</h1>
                </div>
                <CurrencyInput currency={currency} setCurrency={setCurrency} />
            </div>
            <div>
                <h1>Chart goes here</h1>
            </div>
        </div>
    );
}

export default CurrencyApp;
