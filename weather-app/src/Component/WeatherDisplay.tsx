import { LucideCalendar, LucideHeart } from "lucide-react";
import type { City, WeatherData } from "../Utils/Type";
import { weatherMapping } from "../Utils/WeatherCode";
import type React from "react";

interface MainDisplayProps {
    cityData: City | null;
    weatherData: WeatherData | null;
    handleFav: (lat: number, lon: number, name: string) => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function WeatherDisplay({
    cityData,
    weatherData,
    handleFav,
    handleSearch,
}: MainDisplayProps) {
    const getDayName = (isoDate: string | undefined) => {
        if (isoDate) {
            return new Date(isoDate).toLocaleDateString("en-US", {
                weekday: "long",
            });
        }
    };

    const code: number = weatherData?.current.weather_code ?? 0;
    const weather = weatherMapping[code] ?? {
        label: "Loading...",
        icon: "Loading...",
    };

    return (
        <div>
            <input
                type="search"
                placeholder="Search.."
                onChange={handleSearch}
                className="w-full border-2 border-border-color py-3 px-5 outline-none rounded-full bg-primary-color"
            />

            <section className="border-2 border-border-color w-112.5 h-112.5 flex flex-col bg-primary-color rounded-[20px]">
                <div className="flex justify-between border-b-2 border-border-color py-2 px-5">
                    <h1 className="text-[30px] font-semibold">
                        {cityData?.name}
                        <span className="text-[15px] font-light ml-2">{`${cityData?.admin1},${cityData?.country}`}</span>
                    </h1>
                    <button
                        onClick={() => {
                            if (cityData) {
                                handleFav(
                                    cityData.latitude,
                                    cityData.longitude,
                                    cityData.name,
                                );
                            }
                        }}
                    >
                        <LucideHeart />
                    </button>
                </div>
                <div className="mx-auto flex flex-col items-center">
                    <img
                        src={`/Weather Icon/${weather.icon}.svg`}
                        alt="weather-icon"
                        className="aspect-square w-50"
                    />
                    <h1 className="text-[40px] font-bold">
                        {weatherData?.current.temperature_2m.toFixed(0)}°
                    </h1>
                    <h2 className="text-[30px] font-bold">{weather.label}</h2>
                </div>
                <div className="my-auto flex justify-around">
                    <h1>Wind: {weatherData?.current.wind_speed_10m} km/h</h1>
                    <h1>
                        Humidity: {weatherData?.current.relative_humidity_2m}%
                    </h1>
                </div>
            </section>

            <section className="border-2 border-border-color p-4 rounded-[20px] bg-primary-color flex justify-between items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-[18px] font-semibold">
                        Chance of rain
                    </h1>
                    <h1 className="text-[40px] font-semibold">
                        {weatherData?.current.precipitation}%
                    </h1>
                </div>
                <div>
                    <img
                        src={`/Weather Icon/UV Index/uv-index-${weatherData?.daily.uv_index_max[0].toFixed(0)}.svg`}
                        alt="uv-index"
                    />
                    <p>UV-Index {}</p>
                </div>
                <div className="flex flex-col items-center">
                    <LucideCalendar size={25} />
                    <h1 className="font-semibold text-[18px]">
                        {getDayName(weatherData?.current.time)}
                    </h1>
                </div>
            </section>
        </div>
    );
}

export default WeatherDisplay;
