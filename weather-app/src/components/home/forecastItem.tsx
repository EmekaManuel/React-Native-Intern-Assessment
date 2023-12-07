import { weatherImages } from "@/constants";
import { Box, Text } from "@/utils/theme";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ForeCastItemProps } from "@/types";

const ForeCastItem: React.FC<ForeCastItemProps> = ({ item, dayName }) => {
  return (
    <View>
      <Box
        justifyContent="center"
        borderRadius="rounded-3xl"
        alignItems="center"
        py="3"
        mr="4"
        width={120}
        backgroundColor="gray650"
      >
        <Image
          source={weatherImages[item.day.condition.text || "other"]}
          style={styles.imageStyle}
        />
        <Text variant="textBase" color="white">
          {dayName}
        </Text>
        <Text variant="textXl" fontWeight="bold" color="white">
          {item.day.avgtemp_c}&#176;
        </Text>
      </Box>
    </View>
  );
};

export default ForeCastItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: 30,
    height: 30,
  },
});
