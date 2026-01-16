import WeatherDisplay from "./Component/WeatherDisplay";
import FavoriteList from "./PanelTab/FavoriteList";
import WeekForecast from "./PanelTab/WeekForecast";

function App() {
    return (
        <div className="flex">
            <WeatherDisplay />
            <div>
                <div>
                    <label>
                        <input type="radio" name="navigation-tab" />
                        <span>Week Forecast</span>
                    </label>
                    <label>
                        <input type="radio" name="navigation-tab" />
                        <span>Favorite</span>
                    </label>
                </div>
                <WeekForecast />
                <FavoriteList />
            </div>
        </div>
    );
}

export default App;
