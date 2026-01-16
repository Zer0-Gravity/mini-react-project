export interface City {
    name: string;
    admin1?: string;
    country_code: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
}

export interface GeocodingResponse {
    results?: City[];
}

export interface CurrentWeather {
    precapitaion: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    weather_code: number;
}

export interface DailyWeather {
    temperature_2m_max: [];
    temperature_2m_min: [];
    uv_index_max: [];
    weather_code: [];
}
