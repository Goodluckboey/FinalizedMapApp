import React, { useState, useEffect } from "react";
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
import { selectLocation } from "../actions";
import { Provider } from "react-redux";

const height = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const [rerender, setrerender] = useState(0);
  let counter = 0;

  const makeRender = () => {
    counter++;
    console.log(1);
  };

  useEffect(() => {
    setrerender(counter);
    console.log(2);
  }, [counter]);

  const produceTest = () => {
    alert("Hello! I am an alert box!!");
    console.log(store.getState());
    console.log("===============================");
  };

  const updateState = (input) => {
    store.dispatch(selectLocation(input));
  };

  return (
    <ScrollView>
      {/* <View style={styles.container}> */}
      {/* <Button onPress={makeRender} title="press"></Button>
        <Button title="Fetch Data!" onPress={produceTest}></Button>
        <Text>Home Screen</Text> */}
      {positionData.map((element) => {
        return (
          <View key={element.name}>
            <Text>
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
      {/* </View> */}
    </ScrollView>
  );
};

export default HomeScreen;

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
