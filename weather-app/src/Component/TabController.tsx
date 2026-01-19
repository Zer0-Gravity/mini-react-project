import type React from "react";

interface TabControllerProps {
    handleTabChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedTab: string;
}

function TabController({ handleTabChange, selectedTab }: TabControllerProps) {
    return (
        <div className="border-2 border-border-color h-12 p-1 flex justify-between items-center bg-primary-color rounded-full">
            <label className="rounded-full h-8.75 w-49 flex items-center justify-center has-checked:bg-border-color">
                <input
                    type="radio"
                    name="navigation-tab"
                    value="forecast"
                    checked={selectedTab === "forecast"}
                    onChange={handleTabChange}
                    className="hidden"
                />
                <span className="font-semibold">Week Forecast</span>
            </label>
            <label className="rounded-full h-8.75 w-49 flex items-center justify-center has-checked:bg-border-color">
                <input
                    type="radio"
                    name="navigation-tab"
                    value="favorite"
                    checked={selectedTab === "favorite"}
                    onChange={handleTabChange}
                    className="hidden"
                />
                <span className="font-semibold">Favorite</span>
            </label>
        </div>
    );
}

export default TabController;
