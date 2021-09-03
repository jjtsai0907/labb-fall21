import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Password = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.clickPassword(props.name)}>
        <Text>Do wanna know {props.name}'s Facebook password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Password;
