import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";
import axios from "axios";

interface Data {
    amount: number;
    base: string;
    date: string;
    rates: Rates;
}

interface Rates {
    [key: string]: string;
}

interface Currency {
    [key: string]: number;
}

function CurrencyApp() {
    const [currFrom, setCurrFrom] = useState<string>("");
    const [currTo, setCurrTo] = useState<string>("");
    const [data, setData] = useState<Data | null>(null);
    const [currency, setCurrency] = useState<Currency>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (currFrom && currTo) {
                    await axios
                        .get(
                            `https://api.frankfurter.dev/v1/latest?base=${currFrom}&symbols=${currTo}`
                        )
                        .then((response) => {
                            setData(response.data);
                        });

                    await axios
                        .get("https://api.frankfurter.dev/v1/currencies")
                        .then((response) => {
                            setCurrency(response.data);
                        });
                }
            } catch (error) {
                console.log("Error fetching", error);
            }
        };

        fetchData();
    }, [currFrom, currTo]);

    console.log(data?.rates);

    return (
        <div className="flex w-225 p-2 bg-amber-50 ">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">CURRENCY CONVERTER</h1>
                {data && currency ? (
                    <div>
                        <p>{`${data.amount}  ${currency[currFrom]} is equal to`}</p>
                        <h1 className="text-4xl">{`${data.rates[currTo]} ${currency[currTo]}`}</h1>
                        <p>{data.date}</p>
                    </div>
                ) : (
                    <h1>Select a currency you wanna count</h1>
                )}
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
