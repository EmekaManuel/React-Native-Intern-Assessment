import AddFiles from "@/components/images/add-files-svg";
import LocationBox from "@/components/search/location-box";
import NotFound from "@/components/shared/not-found";
import { LocationProps } from "@/types";
import { Box, Text } from "@/utils/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoriteScreen = () => {
  const [bookmarks, setBookmarks] = useState<LocationProps[]>([]);
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem("bookmarks");
        if (storedBookmarks) {
          setBookmarks(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error("Error fetching bookmarks from local storage:", error);
      }
    };

    fetchBookmarks();
    const intervalId = setInterval(() => {
      fetchBookmarks();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box style={styles.container}>
      <StatusBar backgroundColor="light" />
      <Image
        style={styles.backgroundImage}
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
      />
      <SafeAreaView style={styles.overlay}>
        <Text
          textAlign="center"
          color="white"
          variant="text2Xl"
          fontWeight="bold"
        >
          Saved Locations
        </Text>
        {/* Suggestions */}
        {bookmarks.length === 0 ? (
          <NotFound message="No saved Location" svgComponent={<AddFiles />} />
        ) : (
          <Box
            flexDirection="column"
            marginTop="5"
            paddingHorizontal="5"
            flex={1}
          >
            <FlatList
              data={bookmarks}
              keyExtractor={(item) => item.id || item.name}
              renderItem={({ item }) => <LocationBox item={item} />}
            />
          </Box>
        )}
      </SafeAreaView>
    </Box>
  );
};

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
  scrollview: {
    paddingHorizontal: 5,
  },
});

export default FavoriteScreen;
