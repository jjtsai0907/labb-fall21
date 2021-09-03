import React from "react";
import { Text } from "react-native";
import Card from "../components/Card";

const Info = (props) => {
  return (
    <>
      <Card>
        <Text>
          {props.first} {props.second}
        </Text>
      </Card>

      <Card>
        <Text> Home Number: {props.phone}</Text>
        <Text> Cell Number: {props.cell}</Text>
      </Card>
    </>
  );
};

export default Info;
