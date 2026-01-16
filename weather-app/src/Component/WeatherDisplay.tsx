import type { City, WeatherData } from "../Utils/Type";
import { weatherMapping } from "../Utils/WeatherCode";

interface MainDisplayProps {
    cityData: City | null;
    weatherData: WeatherData | null;
}

function WeatherDisplay({ cityData, weatherData }: MainDisplayProps) {
    const getDayName = (isoDate: string | undefined) => {
        if (isoDate) {
            return new Date(isoDate).toLocaleDateString("en-US", {
                weekday: "long",
            });
        }
    };

    const code: number = weatherData?.current.weather_code ?? 0;
    const weather = weatherMapping[code] ?? {
        label: "Loading...",
        icon: "Loading...",
    };

    return (
        <div>
            <input type="search" placeholder="Search.." />

            <section>
                <div>
                    <h1>{`${cityData?.name}, ${cityData?.admin1},${cityData?.country}`}</h1>
                </div>
                <div>
                    <img
                        src={`/Weather Icon/${weather.icon}.svg`}
                        alt="weather-icon"
                    />
                    <h1>{weatherData?.current.temperature_2m.toFixed(0)}</h1>
                    <h2>{weather.label}</h2>
                </div>
                <div>
                    <h1>Wind: {weatherData?.current.wind_speed_10m} km/h</h1>
                    <h1>
                        Humidity: {weatherData?.current.relative_humidity_2m}%
                    </h1>
                </div>
            </section>

            <section>
                <div>
                    <h1>Chance of rain</h1>
                    <h1>{weatherData?.current.precipitation}%</h1>
                </div>
                <div>
                    <img src="https://placehold.co/40x40" alt="uv-index" />\
                    <p>UV Index</p>
                </div>
                <div>
                    <h1>{getDayName(weatherData?.current.time)}</h1>
                </div>
            </section>
        </div>
    );
}

export default WeatherDisplay;
