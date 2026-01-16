import type React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import FavoriteList from "./PanelTab/FavoriteList";
import WeekForecast from "./PanelTab/WeekForecast";
import { useState } from "react";
import TabController from "./Component/TabController";

function App() {
    const [selectedTab, setSelectedTab] = useState<string>("forecast");

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTab(e.target.value);
    };

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
