import type { WeatherData } from "../Utils/Type";
import { weatherMapping } from "../Utils/WeatherCode";

interface WeeklyForecastProps {
    weatherData: WeatherData | null;
}

function WeekForecast({ weatherData }: WeeklyForecastProps) {
    return (
        <div className="border-2 border-border-color bg-primary-color rounded-[20px] h-143.75 overflow-y-auto scrollbar">
            <header className="sticky top-0 bg-primary-color border-b-2 border-border-color">
                <h1 className="text-[30px] font-semibold py-2 px-5">
                    7 Days Forecast
                </h1>
            </header>
            <section className="flex flex-col gap-4 p-3">
                {weatherData ? (
                    weatherData.daily.time.map((date, index) => {
                        const weatherCode =
                            weatherData.daily.weather_code[index];
                        const weather = weatherMapping[weatherCode];

                        return (
                            <div
                                key={index}
                                className="flex border-2 border-border-color h-15 rounded-lg bg-primary-color justify-between px-5 items-center text-[15px]"
                            >
                                <div className="flex gap-2">
                                    <h1 className="font-bold">
                                        {new Date(date).toLocaleDateString(
                                            "en-US",
                                            { weekday: "short" },
                                        )}
                                    </h1>
                                    <h2>
                                        {new Date(date).toLocaleDateString(
                                            "en-US",
                                            { day: "numeric" },
                                        )}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={`/Weather Icon/${weather.icon}.svg`}
                                        alt="weather-icon"
                                        className="aspect-square w-10"
                                    />
                                    <span>{weather.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1>
                                        {weatherData.daily.temperature_2m_max[
                                            index
                                        ].toFixed(0)}
                                        °
                                    </h1>
                                    <h1 className="text-gray-400">
                                        {weatherData.daily.temperature_2m_min[
                                            index
                                        ].toFixed(0)}
                                        °
                                    </h1>
                                </div>
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
