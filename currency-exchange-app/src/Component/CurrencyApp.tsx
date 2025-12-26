import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";
import axios from "axios";

function CurrencyApp() {
    const [currFrom, setCurrFrom] = useState<string>("");
    const [currTo, setCurrTo] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(
                    `https://api.frankfurter.dev/v1/latest?base=${currFrom}&symbols=${currTo}`
                )
                .then((response) => {
                    console.log(response.data);
                });
        };

        fetchData();
    }, [currFrom, currTo]);

    return (
        <div className="flex w-225 p-2 bg-amber-50 ">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">CURRENCY CONVERTER</h1>
                <div>
                    <p>1 money equals to</p>
                    <h1 className="text-4xl">0,0000 This Big Money</h1>
                </div>
                <CurrencyInput setValue={setCurrFrom} />
                <CurrencyInput setValue={setCurrTo} />
            </div>
            <div>
                <h1>Chart goes here</h1>
            </div>
        </div>
    );
}

export default CurrencyApp;
