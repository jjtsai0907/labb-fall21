import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";
import { useSelector, useStore, Provider, useDispatch } from "react-redux";
import { setPrevious } from "./Action";

const Home = () => {
  const [person, setPerson] = useState({});
  const [name, setName] = useState({});
  const [image, setImage] = useState();

  const store = useStore();

  // Fetching data from RandomUser API
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.results[0]);
        setImage(json.results[0].picture.large.toString());
        setName(json.results[0].name);
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  const nextPerson = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.results[0]);
        setImage(json.results[0].picture.large.toString());
        setName(json.results[0].name);
        dispatch(setPrevious(name.first));
      })
      .catch((err) => console.log(err));
  };

  // To get global state
  const previousPerson = useSelector((state) => state.previous);

  return (
    <Provider store={store}>
      <View>
        <View style={styles.image}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>

        <Card>
          <Text>
            {name.first} {name.last}
          </Text>
        </Card>

        <Card>
          <Text> Home Number: {person.phone}</Text>

          <Text> Cell Number: {person.cell}</Text>
        </Card>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={nextPerson} style={styles.button}>
            <Text>See {previousPerson} Again?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={nextPerson} style={styles.button}>
            <Text>Next Person</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
  },
  image: {
    alignItems: "center",
    padding: 30,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "stretch",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Home;
