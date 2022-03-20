import { StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import DataScreen from "./screens/DataScreen";
import { createStackNavigator } from "@react-navigation/stack";

const height = Dimensions.get("window").height;
const store = createStore(myReducer);
const Tab = createBottomTabNavigator();

export default function InnerApp() {
  const locationName = useSelector((state) => state.name);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DataScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
