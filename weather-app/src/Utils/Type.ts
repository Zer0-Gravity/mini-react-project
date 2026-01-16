export interface City {
    name: string;
    admin1?: string;
    country_code: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
}

export interface WeatherData {
    current: CurrentWeather;
    daily: DailyWeather;
}

export interface CurrentWeather {
    precipitation: number;
    is_day: boolean;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
    wind_speed_10m: number;
}

export interface DailyWeather {
    temperature_2m_max: [];
    temperature_2m_min: [];
    uv_index_max: [];
    weather_code: [];
}

export interface Favorite {
    name: string;
    latitude: number;
    longitude: number;
}
