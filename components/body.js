import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.bigview}>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img4.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img8.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img6.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img7.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img5.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img6.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img7.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img8.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img1.jpg")}
              />
            </View>
            <View style={styles.smallview}>
              <Image
                style={styles.myimage}
                source={require("./img/img1.jpg")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  smallview: {
    margin: 2,
    height: 200,
    width: Dimensions.get("window").width / 2 - 4,
  },
  myimage: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
});
