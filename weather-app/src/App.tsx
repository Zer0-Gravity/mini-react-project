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

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [cityData, setCityData] = useState<City | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<FavoriteList[]>(dummy);

    useEffect(() => {
        async function fetchWeather(
            latitude: number | undefined,
            longitude: number | undefined,
            timezone: string | undefined
        ) {
            try {
                setIsLoading(true);
                await axios
                    .get(
                        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max,temperature_2m_max,temperature_2m_min,weather_code&current=is_day,temperature_2m,weather_code,precipitation,relative_humidity_2m,wind_speed_10m&timezone=${timezone}`
                    )
                    .then((response) => {
                        setWeatherData(response.data);
                    });
            } catch (error) {
                console.error("Error fetching weather data", error);
            } finally {
                setIsLoading(false);
            }
        }

        async function getCityData() {
            try {
                setIsLoading(true);
                await axios
                    .get(
                        "https://geocoding-api.open-meteo.com/v1/search?name=yokohama&count=1&language=en&format=json"
                    )
                    .then((response) => {
                        setCityData(response.data.results?.[0]);
                        const results = response.data.results?.[0];
                        const { latitude, longitude, timezone } = results;
                        fetchWeather(latitude, longitude, timezone);
                    });
            } catch (error) {
                console.error("Couldn't find city data", error);
            } finally {
                setIsLoading(false);
            }
        }

        getCityData();
    }, []);

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

    return (
        <main className="flex relative">
            <WeatherDisplay
                cityData={cityData}
                weatherData={weatherData}
                handleFav={handleFav}
            />
            <section>
                <TabController
                    handleTabChange={handleTabChange}
                    selectedTab={selectedTab}
                />
                <div>
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
        </main>
    );
}

export default App;
