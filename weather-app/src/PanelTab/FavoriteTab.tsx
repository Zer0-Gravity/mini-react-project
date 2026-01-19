import { useEffect, useState } from "react";
import type { CombinedData, FavoriteList } from "../Utils/Type";
import axios from "axios";
import { weatherMapping } from "../Utils/WeatherCode";
import { LucideHeart, LucideLoader } from "lucide-react";

interface FavoriteListProps {
    favorite: FavoriteList[];
}

function FavoriteTab({ favorite }: FavoriteListProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [favData, setFavData] = useState<CombinedData[]>();

    const lats = favorite.map((item) => item.latitude).join(",");
    const lons = favorite.map((item) => item.longitude).join(",");

    useEffect(() => {
        try {
            setIsLoading(true);
            async function fetchFavoriteCity() {
                const response = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?`,
                    {
                        params: {
                            latitude: lats,
                            longitude: lons,
                            current: `weather_code,temperature_2m,relative_humidity_2m`,
                            timezone: `auto`,
                        },
                    },
                );
                const cityWeather: CombinedData[] = response.data;

                const combineData = favorite.map((data, index) => {
                    return {
                        ...data,
                        ...cityWeather[index],
                    };
                });
                setFavData(combineData);
            }
            fetchFavoriteCity();
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsLoading(false);
        }
    }, [lats, lons, favorite]);

    return (
        <div>
            <header className="sticky top-0 bg-primary-color border-b-2 border-border-color">
                <h1 className="text-[30px] font-semibold py-2 px-5 text-center">
                    Favorite
                </h1>
            </header>
            <section className="flex flex-col gap-4 p-3">
                {favData ? (
                    favData.map((data) => {
                        const weatherCode = data.current.weather_code ?? 0;
                        const weather = weatherMapping[weatherCode] ?? {
                            label: "Loading...",
                            icon: "Loading...",
                        };

                        return (
                            <div
                                key={data.name}
                                className="px-4 rounded-lg bg-primary-color border border-border-color flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <LucideHeart
                                        size={20}
                                        fill="red"
                                        stroke="red"
                                    />
                                    <h1 className="text-[15px]">{data.name}</h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={`/Weather Icon/${weather.icon}.svg`}
                                        alt="weather"
                                        className="aspect-square w-12.5"
                                    />
                                    <span>{weather.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1>{data.current.temperature_2m}°</h1>
                                    <h1 className="text-gray-400">
                                        {data.current.relative_humidity_2m}%
                                    </h1>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center font-bold">No data</div>
                )}
                {isLoading && (
                    <div>
                        <LucideLoader />
                    </div>
                )}
            </section>
        </div>
    );
}

export default FavoriteTab;
