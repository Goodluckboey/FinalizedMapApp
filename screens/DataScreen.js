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
import { makeNewLocationList } from "../actions";
// import { starReducer, myReducer } from "../reducer";

const { width, height } = Dimensions.get("screen");

const DataScreen = ({ navigation }) => {
  const updateState = (input) => {
    store.dispatch(makeNewLocationList(input));
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text>{store.getState().myReducer.metaData}</Text>
          <Button
            title="Star Me"
            onPress={() => {
              console.log(store.getState());
              // updateState({})
            }}
          ></Button>
          <Button
            title="TestME"
            onPress={() => {
              updateState(store.getState().myReducer);
            }}
          ></Button>
        </View>
      </ScrollView>
      <Button
        title="console"
        onPress={() => {
          console.log(store.getState().starReducer);
        }}
      ></Button>
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
