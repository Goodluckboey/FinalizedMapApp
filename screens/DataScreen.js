import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import store from "../store";

const { width, height } = Dimensions.get("screen");

const DataScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{store.getState().metaData}</Text>
        <Button
          title="Press me"
          onPress={() => {
            console.log(store.getState());
          }}
        ></Button>
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
