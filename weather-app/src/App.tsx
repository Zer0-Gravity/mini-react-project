import type React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import FavoriteList from "./PanelTab/FavoriteList";
import WeekForecast from "./PanelTab/WeekForecast";
import { useEffect, useState } from "react";
import TabController from "./Component/TabController";
import axios from "axios";
import type { GeoCoding, GeocodingResponse } from "./Utils/Type";

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");
    const [weatherData, setWeatherData] = useState(null);
    const [cityData, setCityData] = useState<GeocodingResponse | null>(null);

    useEffect(() => {
        async function fetchWeather(
            latitude: number | undefined,
            longitude: number | undefined,
            timezone: string | undefined
        ) {
            try {
                await axios
                    .get(
                        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max,temperature_2m_max,temperature_2m_min,weather_code&current=temperature_2m,weather_code,precipitation,relative_humidity_2m,wind_speed_10m&timezone=${timezone}`
                    )
                    .then((response) => {
                        setWeatherData(response.data);
                    });
            } catch (error) {
                console.error("Error fetching weather data", error);
            }
        }

        async function getCityData() {
            try {
                await axios
                    .get(
                        "https://geocoding-api.open-meteo.com/v1/search?name=yokohama&count=1&language=en&format=json"
                    )
                    .then((response) => {
                        setCityData(response.data);
                        const results = response.data.results?.[0];
                        const { latitude, longitude, timezone } = results;
                        fetchWeather(latitude, longitude, timezone);
                    });
            } catch (error) {
                console.error("Couldn't find city data", error);
            }
        }

        getCityData();
    }, []);

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTab(e.target.value);
    };

    console.log(weatherData, cityData);

    return (
        <main className="flex">
            <WeatherDisplay />
            <section>
                <TabController
                    handleTabChange={handleTabChange}
                    selectedTab={selectedTab}
                />
                <div>
                    {selectedTab === "forecast" && <WeekForecast />}
                    {selectedTab === "favorite" && <FavoriteList />}
                </div>
            </section>
        </main>
    );
}

export default App;
