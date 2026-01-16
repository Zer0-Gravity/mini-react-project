import type React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import FavoriteList from "./PanelTab/FavoriteList";
import WeekForecast from "./PanelTab/WeekForecast";
import { useEffect, useState } from "react";
import TabController from "./Component/TabController";
import axios from "axios";

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            await axios
                .get(
                    "https://api.open-meteo.com/v1/forecast?latitude=34.6938&longitude=135.5011&daily=uv_index_max,temperature_2m_max,temperature_2m_min,weather_code&current=temperature_2m,weather_code,precipitation,relative_humidity_2m,wind_speed_10m&timezone=GMT"
                )
                .then((response) => {
                    setWeatherData(response.data);
                });
        }

        fetchWeather();
    }, []);

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTab(e.target.value);
    };

    console.log(weatherData);

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
