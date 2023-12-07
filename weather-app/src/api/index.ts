//api.weatherapi.com/v1/current.json?key=6602b188b05d4d66b08155054230306&q=London&aqi=no
//api.weatherapi.com/v1/forecast.json?key=6602b188b05d4d66b08155054230306&q=London&days=4&aqi=no&alerts=no
//api.weatherapi.com/v1/search.json?key=6602b188b05d4d66b08155054230306&q=Lagos

import { ForecastAPIParams, LocationsAPIParams } from "@/types";
import axios, { AxiosResponse } from "axios";

// on production, these constants would be in a .env file
const WEATHER_API_KEY = "6602b188b05d4d66b08155054230306";
const BASE_URL = "https://api.weatherapi.com/v1/";

// api endpoints
const forecastEndpoint = (params: ForecastAPIParams): string =>
  `${BASE_URL}forecast.json?key=${WEATHER_API_KEY}&q=${params.cityName}&days=${params.days}`;

const locationsEndpoint = (params: LocationsAPIParams): string =>
  `${BASE_URL}search.json?key=${WEATHER_API_KEY}&q=${params.cityName}`;

const currentWeatherEndpoint = (params: LocationsAPIParams): string =>
  `${BASE_URL}current.json?key=${WEATHER_API_KEY}&q=${params.cityName}&aqi=no`;

// api call¸¸¸¸¸¸¸¸¸¸¸¸¸¸¸
const apiCall = async <T>(endpoint: string): Promise<T> => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response: AxiosResponse<T> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {} as T;
  }
};

export const fetchWeatherForecast = (
  params: ForecastAPIParams
): Promise<any> => {
  const forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = (params: LocationsAPIParams): Promise<any> => {
  const locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};

export const fetchCurrentWeather = (
  params: LocationsAPIParams
): Promise<any> => {
  const currentWeatherUrl = currentWeatherEndpoint(params);
  return apiCall(currentWeatherUrl);
};
