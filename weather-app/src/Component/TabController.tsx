import type React from "react";

interface TabControllerProps {
    handleTabChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedTab: string;
}

function TabController({ handleTabChange, selectedTab }: TabControllerProps) {
    return (
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
    );
}

export default TabController;
