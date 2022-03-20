import { Provider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducer";
import InnerApp from "./InnerApp";
import React from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const height = Dimensions.get("window").height;

export default function customNavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.homeTitle}
        onPress={() => {
          console.log("HomeTitle");
          navigation.navigate("Home");
        }}
      >
        HOME
      </Text>
      <Text
        style={styles.mapTitle}
        onPress={() => {
          console.log("MapTitle");
          navigation.navigate("Map");
        }}
      >
        MAP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
  },
  map: {
    height,
  },
  homeTitle: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "40%",
  },
  mapTitle: {},
});
