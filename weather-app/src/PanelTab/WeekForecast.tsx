import type { WeatherData } from "../Utils/Type";
import { weatherMapping } from "../Utils/WeatherCode";

interface WeeklyForecastProps {
    weatherData: WeatherData | null;
}

function WeekForecast({ weatherData }: WeeklyForecastProps) {
    return (
        <div>
            <header>
                <h1>7 Days Forecast</h1>
            </header>
            <section>
                {weatherData ? (
                    weatherData.daily.time.map((date, index) => {
                        const weatherCode =
                            weatherData.daily.weather_code[index];
                        const weather = weatherMapping[weatherCode];

                        return (
                            <div key={index} className="flex">
                                <div className="flex">
                                    <h1>
                                        {new Date(date).toLocaleDateString(
                                            "en-US",
                                            { weekday: "short" }
                                        )}
                                    </h1>
                                    <h2>
                                        {new Date(date).toLocaleDateString(
                                            "en-US",
                                            { day: "numeric" }
                                        )}
                                    </h2>
                                </div>
                                <div className="flex">
                                    <img
                                        src={`/Weather Icon/${weather.icon}.svg`}
                                        alt="weather-icon"
                                        className="aspect-square w-10"
                                    />
                                    <span>{weather.label}</span>
                                </div>
                                <h1>
                                    {weatherData.daily.temperature_2m_max[
                                        index
                                    ].toFixed(0)}
                                    °
                                </h1>
                                <h1>
                                    {weatherData.daily.temperature_2m_min[
                                        index
                                    ].toFixed(0)}
                                    °
                                </h1>
                            </div>
                        );
                    })
                ) : (
                    <div>no data</div>
                )}
            </section>
        </div>
    );
}

export default WeekForecast;
