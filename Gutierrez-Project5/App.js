
import React, { Component } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  Dimensions,
  StyleSheet,
  Text, // These are not used yet, but will likely be useful later in the exercise
  TouchableOpacity,
  View
} from "react-native";

export default class App extends Component {
  state = {
    location: null
  };

  async componentDidMount() {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission.granted) {
      this.getLocation();
    }
  }

  async getLocation() {
    let loc = await Location.getCurrentPositionAsync();
    this.setState({ location: loc, currentLocation: loc });
  }

  render() {
    return this.state.location ? (
      <MapView
        style={styles.map}
        region={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={this.state.location.coords}
          title={"User Location"}
          description={"You are here!"}
          image={require("./assets/you-are-here.png")}
        />
      </MapView>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  map: {
    flex: 7,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});
