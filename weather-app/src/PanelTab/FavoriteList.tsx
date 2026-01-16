import { useEffect, useState } from "react";
import type { Favorite, FavoriteData } from "../Utils/Type";
import axios from "axios";

interface FavoriteListProps {
    favorite: Favorite[];
}

function FavoriteList({ favorite }: FavoriteListProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [favData, setFavData] = useState<FavoriteData[]>();

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
                const cityWeather: FavoriteData[] = response.data;

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
                {favorite.length !== 0 ? (
                    <div>
                        <div>
                            <img src="https://placehold.co/30x30" alt="icon" />
                            <h1>London</h1>
                        </div>
                        <div>
                            <img
                                src="https://placehold.co/30x30"
                                alt="weather"
                            />
                            <span>Drizzle</span>
                        </div>
                        <div>
                            <h1>20°</h1>
                            <h1>17°</h1>
                        </div>
                    </div>
                ) : (
                    <div>No data</div>
                )}
            </section>
        </div>
    );
}

export default FavoriteList;
