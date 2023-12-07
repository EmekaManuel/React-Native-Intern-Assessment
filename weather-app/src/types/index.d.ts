export interface IWeather {
  location: string;
  degree: string;
  humidity: string;
}

export interface LocationProps {
  id?: string;
  region?: string;
  country?: string;
  name: string;
  item?: {
    country?: string;
    region?: string;
    id?: string;
  };
}

export interface WeatherDataProps {
  location?: {
    name: string;
  };
  current?: {
    temp_f?: number;
    wind_kph?: number;
    temp_c?: number;
    humidity?: number;
    pressure_mb?: number;
    condition?: {
      text: string;
    };
  };
  forecast?: {
    forecastday: Array<{
      astro: {
        sunrise: string;
        sunset: string;
      };
      date: string;
      date_epoch: number;
      day: {
        avghumidity: number;
        avgtemp_c: number;
        avgtemp_f: number;
        condition: {
          code: number;
          icon: string;
          text: string;
        };
      };
    }>;
  };
}

export interface ForeCastItemProps {
  item: {
    astro: {
      sunrise: string;
      sunset: string;
    };
    date: string;
    date_epoch: number;
    day: {
      avghumidity: number;
      avgtemp_c: number;
      avgtemp_f: number;
      condition: {
        code: number;
        icon: string;
        text: string;
      };
    };
  };
  index?: number;
  date: Date;
  dayName?: string;
}

// ********* API Interfaces **********/

export interface ForecastAPIParams {
  cityName: string;
  days: number;
}

export interface LocationsAPIParams {
  cityName?: string;
}

export interface WeatherApiResponse<T> {
  error?: string;
}
