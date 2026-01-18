import { useEffect, useState } from "react";
import type { CombinedData, FavoriteList } from "../Utils/Type";
import axios from "axios";
import { weatherMapping } from "../Utils/WeatherCode";
import { LucideLoader } from "lucide-react";

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
                    }
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
            <header>
                <h1>Favorite</h1>
            </header>
            <section>
                {favData ? (
                    favData.map((data) => {
                        const weatherCode = data.current.weather_code ?? 0;
                        const weather = weatherMapping[weatherCode] ?? {
                            label: "Loading...",
                            icon: "Loading...",
                        };

                        return (
                            <div key={data.name}>
                                <div>
                                    <img
                                        src="https://placehold.co/30x30"
                                        alt="icon"
                                    />
                                    <h1>{data.name}</h1>
                                </div>
                                <div>
                                    <img
                                        src={`/Weather Icon/${weather.icon}.svg`}
                                        alt="weather"
                                        className="aspect-square w-12.5"
                                    />
                                    <span>{weather.label}</span>
                                </div>
                                <div>
                                    <h1>{data.current.temperature_2m}°</h1>
                                    <h1>
                                        {data.current.relative_humidity_2m}%
                                    </h1>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>No data</div>
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
