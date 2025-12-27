import React, { useEffect, useState } from "react";
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
    const [loading, setLoading] = useState<boolean>(true);
    const [amountFrom, setAmountFrom] = useState<number>(0);
    const [amountTo, setAmountTo] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
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
            setLoading(false);
        };

        fetchData();
    }, [currFrom, currTo]);

    const handleAmountFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setAmountFrom(value);
        setAmountTo(Number((value * Number(data?.rates[currTo])).toFixed(2)));
    };

    const handleAmountTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setAmountTo(value);
        setAmountFrom(Number((value / Number(data?.rates[currTo])).toFixed(2)));
    };

    console.log(data);

    return (
        <div className="flex w-112.5 h-100 p-5 flex-col gap-3 bg-amber-200 rounded-lg">
            <h1 className=" text-lg font-semibold">CURRENCY CONVERTER</h1>
            {data && currency ? (
                <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                        <p>{`${amountFrom}  ${currency[currFrom]} is equal to`}</p>
                        <h1 className="text-4xl font-bold">{`${amountTo} ${currency[currTo]}`}</h1>
                    </div>
                    <div>
                        <p>{`Data as of : ${data.date} Exchange rate: ${data.rates[currTo]}`}</p>
                    </div>
                </div>
            ) : (
                <h1 className="flex-1 text-xl font-medium">
                    Select a currency you wanna count
                </h1>
            )}
            {loading && <p>Loading plese wait.....</p>}
            <CurrencyInput
                setValue={setCurrFrom}
                amount={amountFrom}
                handleInput={handleAmountFrom}
            />
            <CurrencyInput
                setValue={setCurrTo}
                amount={amountTo}
                handleInput={handleAmountTo}
            />
            <p>
                Data acquired from{" "}
                <a href="https://frankfurter.dev/" className="underline">
                    Frankfurter
                </a>{" "}
                API
            </p>
        </div>
    );
}

export default CurrencyApp;
