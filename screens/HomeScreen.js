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
import { selectLocation } from "../actions";
import customNavigationBar from "../customNavigator";

const height = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const updateState = (input) => {
    store.dispatch(selectLocation(input));
  };

  return (
    <>
      <ScrollView>
        {positionData.map((element) => {
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
        {/* </View> */}
      </ScrollView>
      {customNavigationBar({ navigation })}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
