import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import store from "../store";
import { selectLocation, makeNewLocationList } from "../actions";
import customNavigationBar from "../customNavigator";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const height = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [force, setForce] = useState(false);

  useEffect(() => {
    setForce(!force);
  }, [isFocused]);

  const updateState = (input) => {
    store.dispatch(selectLocation(input));
  };

  return (
    <>
      <ScrollView style={styles.scroll}>
        {store.getState().starReducer.map((element) => {
          return (
            <View key={element.name}>
              {element.starred ? (
                <AntDesign
                  style={styles.star}
                  name="star"
                  size={24}
                  color="black"
                />
              ) : (
                <AntDesign
                  style={styles.star}
                  name="staro"
                  size={24}
                  color="black"
                />
              )}
              <Text style={styles.text}> {element.name}</Text>

              <View>
                <Button
                  style={styles.button}
                  title="View Details"
                  onPress={() => {
                    updateState(element);
                    navigation.navigate("Details");
                  }}
                ></Button>
                <Button
                  style={styles.button}
                  title="View on Map"
                  onPress={() => {
                    updateState(element);
                    navigation.navigate("Map");
                  }}
                ></Button>
              </View>
            </View>
          );
        })}
        {customNavigationBar({ navigation })}
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: { margin: 80 },
  scroll: { height },
  container: {
    maxHeight: "50%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height,
  },
  text: { margin: 6 },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  star: { marginLeft: "auto", marginRight: "auto" },
});
