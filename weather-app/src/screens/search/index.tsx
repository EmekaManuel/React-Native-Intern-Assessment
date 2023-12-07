import { fetchLocations } from "@/api";
import EmptySvg from "@/components/images/empty-search-svg";
import ErrorSvg from "@/components/images/error-404";
import LocationBox from "@/components/search/location-box";
import SearchInput from "@/components/search/search-input";
import Loader from "@/components/shared/loader";
import NotFound from "@/components/shared/not-found";
import { LocationProps } from "@/types";
import { storeData } from "@/utils/storage";
import { Box } from "@/utils/theme";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const SearchScreen = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(true);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [locations, setLocations] = useState<LocationProps[]>([]);

  const errorMessage = "There is no weather data for this location.";

  const handleSearch = async (value: string | LocationProps) => {
    const cityName = typeof value === "string" ? value : value.name;
    if (cityName.length > 2) {
      setloading(true);
      setError(false);

      try {
        const data = await fetchLocations({
          cityName: cityName,
        });

        setloading(false);

        if (!data || data.length === 0) {
          setError(true);
          setLocations([]);
        } else {
          setError(false);
          setLocations(data);
          storeData("city", cityName);
          setIsSearchVisible(false);
          console.log(data);
        }
      } catch (error) {
        setloading(false);
        setError(true);
        setLocations([]);
      }
    } else {
      setloading(false);
      setLocations([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 2000), []);

  return (
    <Box style={styles.container}>
      <StatusBar backgroundColor="light" />
      <Image
        style={styles.backgroundImage}
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
      />
      <SafeAreaView style={styles.overlay}>
        {/* search section */}
        <SearchInput
          handleTextDebounce={handleTextDebounce}
          showSearch={isSearchVisible}
        />
        {/* Suggestions */}
        {loading ? (
          <Loader />
        ) : error ? (
          <NotFound message={errorMessage} svgComponent={<ErrorSvg />} />
        ) : locations.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            style={styles.scrollview}
          >
            <Box flexDirection="column" flex={1}>
              {locations.map((item, index) => (
                <View key={index}>
                  <LocationBox item={item} />
                </View>
              ))}
            </Box>
          </ScrollView>
        ) : (
          <NotFound
            message="Click The Search Icon"
            svgComponent={<EmptySvg />}
          />
        )}
      </SafeAreaView>
    </Box>
  );
};

export default SearchScreen;

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
