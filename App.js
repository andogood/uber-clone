import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Permissions, Location } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421,
      }
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <MapView
          initialRegion={this.state.region}
          showUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{ flex: 1 }}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
