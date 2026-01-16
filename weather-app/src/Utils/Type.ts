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
