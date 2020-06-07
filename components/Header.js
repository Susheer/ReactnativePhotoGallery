import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require("./img/backgroundIm.jpg")}
      >
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image
              style={styles.mypic}
              source={require("./img/profile-pic.jpg")}
            />
          </View>
          <Text style={styles.name}>Sudhir</Text>
          <Text style={styles.liner}>my photo gallery</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
  headercontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  profilepiccontainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 15,
    borderColor: "rgba(0,0,0,0.4)",
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 90,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  liner: {
    color: "#fff",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 5,
  },
});
