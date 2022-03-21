import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import positionData from "../positionData";
import store from "../store";
import { selectLocation, makeNewLocationList } from "../actions";
import customNavigationBar from "../customNavigator";

const height = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  // console.log(store.getState());
  // console.log("this is store^");

  const updateState = (input) => {
    store.dispatch(selectLocation(input));
  };

  return (
    <>
      <ScrollView style={styles.scroll}>
        <Button
          title="True Form"
          onPress={() => {
            console.log(store.getState());
          }}
        ></Button>
        {store.getState().starReducer.map((element) => {
          return (
            <View key={element.name} style={styles.container}>
              <Text style={styles.text}>
                {element.name}
                <Button
                  title="View Details"
                  onPress={() => {
                    updateState(element);
                    navigation.navigate("Details");
                  }}
                ></Button>
                <Button
                  title="View on Map"
                  onPress={() => {
                    updateState(element);
                    navigation.navigate("Map");
                  }}
                ></Button>
              </Text>
            </View>
          );
        })}
      </ScrollView>
      {customNavigationBar({ navigation })}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scroll: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  map: {
    height,
  },
  text: { margin: 6 },
  text: {
    flex: 1,
  },
});
