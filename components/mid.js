import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outerview, styles.leftbar]}>
          <Text style={styles.textone}>75+</Text>
          <Text style={styles.texttwo}>Images</Text>
        </View>
        <View style={styles.outerview}>
          <Text style={styles.textone}>100K +</Text>
          <Text style={styles.texttwo}>Subscribers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: "row",
    backgroundColor: "#2475B0",
    borderTopColor: "#fff",
  },
  outerview: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  textone: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  texttwo: {
    color: "#fff",
    fontSize: 15,
    marginTop: 5,
  },
  leftbar: {
    borderRightColor: "#fff",
    borderRightWidth: 4,
  },
});
