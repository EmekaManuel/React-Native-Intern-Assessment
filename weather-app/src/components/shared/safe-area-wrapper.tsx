import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaWrapperProps = {
  children: ReactNode;
};
const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    height: "100%",
    marginHorizontal: 0,
  },
});
