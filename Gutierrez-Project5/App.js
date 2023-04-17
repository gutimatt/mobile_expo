
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

import Notification from './Notification';

export default class App extends Component {
    state = {
      location: null,
      poi1: {
        coords: {
          latitude: 33.307146,
          longitude: -111.681177,
        }
      },
      poi2: {
        coords: {
          latitude: 33.423204,
          longitude: -111.939612,
        }
      },
      notify: false,
      message: 'This is a notification!',
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

  toggleNotification = () => {
    this.setState({
      notify: !this.state.notify,
    });
  }

  render() {
    const notify = this.state.notify
      ? <Notification
          autoHide
          message={this.state.message}
          onClose={this.toggleNotification}
        />
    : null;
    
    return (
    <View style={styles.container}>
      {this.state.location ? (
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
          <Marker
            coordinate={this.state.poi1.coords}
            title={"POI 1"}
            description={"Position 1"}
            image={require("./assets/you-are-here.png")}
          />
          <Marker
            coordinate={this.state.poi2.coords}
            title={"POI 2"}
            description={"Position 2"}
            image={require("./assets/you-are-here.png")}
          />
        </MapView>
      ) : null}
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.getLocation()}>
            <Text>You</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          this.setState({
            ...this.state,
            location: this.state.poi1,
          });
        }}>
            <Text>POI 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          this.setState({
            ...this.state,
            location: this.state.poi2,
          });
        }}>
            <Text>POI 2</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
          onPress={this.toggleNotification}
          style={styles.btn}
        >
          <Text style={styles.text}>Show notification</Text>
        </TouchableOpacity>
        {notify}
    </View>
    )
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 40
  },
  map: {
    flex: 7,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10,
  },
});
