import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Box, Text } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import Icons from "../shared/Icon";
import { LocationProps } from "@/types";
import { SearchScreenNavigationType } from "@/navigation/types";
import { addBookmark, removeBookmark } from "@/modules/bookmark";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LocationBoxProps {
  item: LocationProps;
}

interface RootState {
  bookmarks: {
    items: LocationProps[];
  };
}

const LocationBox: React.FC<LocationBoxProps> = ({ item }) => {
  const navigation = useNavigation<SearchScreenNavigationType>();
  const dispatch = useDispatch();

  const bookmarks = useSelector((state: RootState) => state.bookmarks.items);

  const isLocationBookmarked = bookmarks.some(
    (bookmark) => bookmark.id === item.id
  );

  const navigateToWeatherScreen = () => {
    navigation.navigate("WeatherScreen", { item });
  };

  const toggleBookmark = async () => {
    try {
      let updatedBookmarks = [];
      if (isLocationBookmarked) {
        updatedBookmarks = bookmarks.filter(
          (bookmark) => bookmark.id !== item.id
        );
      } else {
        updatedBookmarks = [...bookmarks, item];
      }

      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      if (isLocationBookmarked) {
        dispatch(removeBookmark(item));
      } else {
        dispatch(addBookmark(item));
      }
    } catch (error) {
      console.error("Error updating local storage:", error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={navigateToWeatherScreen}>
      <Box backgroundColor="lightGray" style={styles.boxContainer}>
        <Box>
          <Text style={styles.countryText}>
            {item?.name}, {item?.region}
          </Text>
          <Text style={styles.cityText}>{item?.country}</Text>
        </Box>
        <Pressable onPress={toggleBookmark}>
          <Icons
            color={isLocationBookmarked ? "black" : "gray"}
            name="favorite"
          />
        </Pressable>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    height: 75,
    padding: 16,
    borderRadius: 8,
    justifyContent: "space-between",
  },
  countryText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 2,
  },
  cityText: {
    fontSize: 14,
    color: "#555",
  },
});

export default LocationBox;
