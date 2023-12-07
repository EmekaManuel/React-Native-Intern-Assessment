import { LocationProps } from "@/types";
import { Box, Text } from "@/utils/theme";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import Icons from "../shared/Icon";

interface SearchInputProps {
  showSearch?: boolean;
  handleTextDebounce?: (value: string | LocationProps) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  showSearch = false,
  handleTextDebounce,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(showSearch);

  return (
    <Box height="auto" mx="4" my="4" position="relative" zIndex={50}>
      <Box
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        borderRadius="rounded-5xl"
        backgroundColor={isSearchVisible ? "white" : "transparent"}
      >
        {isSearchVisible ? (
          <TextInput
            style={{
              color: "black",
              fontWeight: "600",
              flex: 1,
              paddingLeft: 10,
              height: 15,
            }}
            onChangeText={(text) =>
              handleTextDebounce && handleTextDebounce(text)
            }
            placeholder="Search Your City"
            placeholderTextColor={"darkgray"}
          />
        ) : (
          <Text
            color="gray550"
            fontWeight="600"
            style={{ flex: 1, paddingLeft: 10, height: 15 }}
          >
            Click the icon to search for a city
          </Text>
        )}
        <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
          <Box
            m="2"
            padding="2"
            borderRadius="rounded-5xl"
            backgroundColor="white"
          >
            {isSearchVisible ? <Icons name="close" /> : <Icons name="search" />}
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SearchInput;
