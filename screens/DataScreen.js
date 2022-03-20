import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import store from "../store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const { width, height } = Dimensions.get("screen");

const DataScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {store.getState()[store.getState().length - 1].metaData ? (
          <Text>{store.getState()[store.getState().length - 1].metaData}</Text>
        ) : (
          <Text>No Data Selected</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  map: {
    height,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
