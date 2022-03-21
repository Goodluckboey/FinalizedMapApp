import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import store from "../store";
import customNavigationBar from "../customNavigator";
import { makeNewLocationList } from "../actions";
import { starReducer, myReducer } from "../reducer";

const { width, height } = Dimensions.get("screen");

const DataScreen = ({ navigation }) => {
  const [force, setForce] = useState(false);
  const [render, setRender] = useState(false);
  const updateState = (input) => {
    store.dispatch(makeNewLocationList(input));
  };

  useEffect(() => {
    setRender(!render);
  }, [force]);

  return (
    <>
      <View style={styles.container}>
        <Text style={{marginBottom: "20%"}}>{store.getState().myReducer.metaData}</Text>

        {store.getState().myReducer.starred ? (
          <AntDesign
            onPress={() => {
              updateState(store.getState().myReducer);
              setForce(!force);
              console.log("Favorited!");
              navigation.navigate("Home");
            }}
            name="star"
            size={24}
            color="black"
          />
        ) : (
          <AntDesign
            onPress={() => {
              updateState(store.getState().myReducer);
              setForce(!force);
              console.log("Favorited!");
              navigation.navigate("Home");
            }}
            name="staro"
            size={24}
            color="black"
          />
        )}
        <Text>Favorite this Location</Text>
      </View>
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
