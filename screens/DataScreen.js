import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import store from "../store";
import customNavigationBar from "../customNavigator";

const { width, height } = Dimensions.get("screen");

const DataScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text>{store.getState().metaData}</Text>
          <Button
            title="Star Me"
            onPress={() => {
              console.log(store.getState());
            }}
          ></Button>
        </View>
      </ScrollView>
      {customNavigationBar({ navigation })}
    </>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingLeft: 10,
  },
  map: {
    height,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  text: {
    flex: 1,
  },
});
