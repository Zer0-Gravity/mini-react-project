import type React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import FavoriteList from "./PanelTab/FavoriteList";
import WeekForecast from "./PanelTab/WeekForecast";
import { useState } from "react";

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTab(e.target.value);
    };

    return (
        <div className="flex">
            <WeatherDisplay />
            <div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="navigation-tab"
                            value="forecast"
                            checked={selectedTab === "forecast"}
                            onChange={handleTabChange}
                        />
                        <span>Week Forecast</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="navigation-tab"
                            value="favorite"
                            checked={selectedTab === "favorite"}
                            onChange={handleTabChange}
                        />
                        <span>Favorite</span>
                    </label>
                </div>
                {selectedTab === "forecast" && <WeekForecast />}
                {selectedTab === "favorite" && <FavoriteList />}
            </div>
        </div>
    );
}

export default App;
