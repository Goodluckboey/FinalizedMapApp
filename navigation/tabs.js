import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import DataScreen from "../screens/DataScreen";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import selectLocationReducer from "../features/selectedLocation";

const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: {
    selectedLocation: selectLocationReducer,
  },
});

const Tabs = () => {
  return (
    <Provider store={store}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Data" component={DataScreen} />
      </Tab.Navigator>
    </Provider>
  );
};

export default Tabs;
