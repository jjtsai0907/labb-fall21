import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    padding: 20,
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    //flex: 1,
  },
});

export default Card;
