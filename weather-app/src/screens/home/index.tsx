import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Loader from "@/components/shared/loader";
import { fetchWeatherForecast } from "@/api";
import { getData } from "@/utils/storage";
import { Box } from "@/utils/theme";
import { StatusBar } from "expo-status-bar";
import { WeatherDataProps } from "@/types";
import NotFound from "@/components/shared/not-found";
import Location from "@/components/home/location";
import Forecast from "@/components/home/forecast";
import WeatherStats from "@/components/home/weather-stats";
import DegreeTemp from "@/components/home/degree";
import WeatherIcon from "@/components/home/weatherIcon";
import NotFoundSvg from "@/components/images/notfound-svg";

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherDataProps>({});
  const [myCity, setMyCity] = useState<string>("Miami");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMyWeatherData();
  }, [myCity]);

  const fetchMyWeatherData = async () => {
    try {
      let storedCity = await getData("city");
      if (storedCity) {
        setMyCity(storedCity);
      }

      const data = await fetchWeatherForecast({
        cityName: myCity,
        days: 7,
      });

      setWeather(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Error fetching weather data. Kindly check your network.");
    }
  };

  if (loading) return <Loader />;

  if (error) return <NotFound message={error} svgComponent={<NotFoundSvg />} />;

  return (
    <Box style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        blurRadius={60}
        source={require("../../../assets/images/bg.png")}
      />
      <SafeAreaView style={styles.overlay}>
        {/* forecast section */}
        <Box gap="3">
          <Location name="Lagos" country="Nigeria" />
          <WeatherIcon weatherIcon={weather} />
          <DegreeTemp weather={weather} />
          <WeatherStats weatherStats={weather} />
          <Forecast weatherForecast={weather} />
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
  },
});
