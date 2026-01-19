import type React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import WeekForecast from "./PanelTab/WeekForecast";
import { useEffect, useState } from "react";
import TabController from "./Component/TabController";
import axios from "axios";
import type { City, WeatherData, FavoriteList } from "./Utils/Type";
import { LucideLoaderCircle } from "lucide-react";
import { dummy } from "./Utils/Mockdata";
import FavoriteTab from "./PanelTab/FavoriteTab";
import { useDebounce } from "./Utils/Debouncer";

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [cityData, setCityData] = useState<City | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<FavoriteList[]>(dummy);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const debounceSearch = useDebounce(searchQuery, 500);

    useEffect(() => {
        async function fetchWeather() {
            try {
                setIsLoading(true);

                const initCity = "Yokohama";

                const geoCoding = await axios.get(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${
                        debounceSearch ? debounceSearch : initCity
                    }&count=1&language=en&format=json`,
                );
                const city = geoCoding.data.results[0];
                const { latitude, longitude } = city;
                setCityData(city);

                const weatherApi = await axios.get(
                    `https://api.open-meteo.com/v1/forecast`,
                    {
                        params: {
                            latitude: latitude,
                            longitude: longitude,
                            daily: `uv_index_max,temperature_2m_max,temperature_2m_min,weather_code`,
                            current: `is_day,temperature_2m,weather_code,precipitation,relative_humidity_2m,wind_speed_10m`,
                            timezone: `auto`,
                        },
                    },
                );

                const weatherData = weatherApi.data;
                setWeatherData(weatherData);
            } catch (error) {
                console.error("Error fetching weather data", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchWeather();
    }, [debounceSearch]);

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTab(e.target.value);
    };

    const handleFav = (lat: number, lon: number, name: string) => {
        const newFav = {
            name: name,
            latitude: lat,
            longitude: lon,
        };

        const isExist = favorite.some((item) => item.name === name);
        if (isExist) return;

        setFavorite((prev) => [...prev, newFav]);
    };

    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <main className="lg:h-screen justify-center items-center flex">
            <div className="flex sm:flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-2">
                    <WeatherDisplay
                        cityData={cityData}
                        weatherData={weatherData}
                        handleFav={handleFav}
                        handleSearch={handleSearchQuery}
                    />
                </div>
                <section className="flex flex-col items-center gap-2">
                    <TabController
                        handleTabChange={handleTabChange}
                        selectedTab={selectedTab}
                    />
                    <div className="border-2 border-border-color bg-primary-color rounded-[20px] h-143.75 w-full overflow-y-auto scrollbar">
                        {selectedTab === "forecast" && (
                            <WeekForecast weatherData={weatherData} />
                        )}
                        {selectedTab === "favorite" && (
                            <FavoriteTab favorite={favorite} />
                        )}
                    </div>
                </section>

                {isLoading && (
                    <div className="absolute inset-0 flex item-center justify-center bg-black/60 backdrop-blur-lg">
                        <div className="bg-white">
                            <LucideLoaderCircle className="animate-spin" />
                            <h1>Loading data...</h1>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default App;
