import Navigation from "@/navigation";
import theme from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "@/modules";
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar translucent />
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}


