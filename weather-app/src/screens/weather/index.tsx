import { Image, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SearchStackParamList } from "@/navigation/types";
import { WeatherDataProps } from "@/types";
import { getData } from "@/utils/storage";
import { fetchWeatherForecast } from "@/api";
import { Box } from "@/utils/theme";
import { StatusBar } from "expo-status-bar";
import Location from "@/components/home/location";
import WeatherIcon from "@/components/home/weatherIcon";
import DegreeTemp from "@/components/home/degree";
import WeatherStats from "@/components/home/weather-stats";
import Forecast from "@/components/home/forecast";
import NavigateBack from "@/components/shared/navigate-back";
import Loader from "@/components/shared/loader";

type WeatherDataRouteProps = RouteProp<SearchStackParamList, "WeatherScreen">;

const WeatherScreen = () => {
  const route = useRoute<WeatherDataRouteProps>();
  const { item } = route.params;

  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherDataProps>({});

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = item.name;
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: 7,
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  if (loading) return <Loader />;

  return (
    <Box style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
      />
      <SafeAreaView style={styles.overlay}>
        {/* forecast section */}
        <Box flex={1} mx="3" gap="3">
          {/* location */}
          <Box
            flex={0}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width={40}>
              <NavigateBack />
            </Box>
            <Location name={item.name} country={item?.country} />
            <Box width={10} />
          </Box>

          <WeatherIcon weatherIcon={weather} />
          <DegreeTemp weather={weather} />
          <WeatherStats weatherStats={weather} />
          <Forecast weatherForecast={weather} />
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default WeatherScreen;

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
