import { WeatherDataProps } from "@/types";
import { Box, Text } from "@/utils/theme";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Icons from "../shared/Icon";
import ForeCastItem from "./forecastItem";

interface ForecastProps {
  weatherForecast: WeatherDataProps;
}

const Forecast: React.FC<ForecastProps> = ({ weatherForecast }) => {
  return (
    <Box mb="2" mt="4" gap="5">
      <Box flexDirection="row" alignItems="center" mx="5" gap="2">
        <Icons name="calendar" color="white" />
        <Text variant="textLg" fontWeight="bold" color="white">
          Daily Forecast
        </Text>
      </Box>
      {
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          {weatherForecast?.forecast?.forecastday?.map((item, index) => {
            const date = new Date(item.date);
            const options: Intl.DateTimeFormatOptions = { weekday: "long" };
            let dayName = date.toLocaleDateString("en-US", options);
            dayName = dayName.split(",")[0];

            return (
              <ForeCastItem
                key={index}
                item={item}
                date={date}
                dayName={dayName}
              />
            );
          })}
        </ScrollView>
      }
    </Box>
  );
};

export default Forecast;
