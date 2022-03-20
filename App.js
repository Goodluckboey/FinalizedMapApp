import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { Provider } from "react-redux";
import store from "./store";

const height = Dimensions.get("window").height;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height,
  },
});
