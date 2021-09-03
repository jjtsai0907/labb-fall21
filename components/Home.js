import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";
import { useSelector, useStore, Provider, useDispatch } from "react-redux";
import { setPrevious } from "./Action";
import Password from "./Password";
import Info from "./Info";

const Home = () => {
  const [person, setPerson] = useState({});
  const [name, setName] = useState({});
  const [password, setPassword] = useState({});
  const [image, setImage] = useState();
  const [showsPassword, setShowsPassword] = useState(false);
  const store = useStore();
  const dispatch = useDispatch();

  // To get global state
  const previousPerson = useSelector((state) => state.previous);

  // Fetching data from RandomUser API
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.results[0]);
        setImage(json.results[0].picture.large.toString());
        setName(json.results[0].name);
        setPassword(json.results[0].login);
      })
      .catch((err) => console.log(err));
  }, []);

  // Func for getting a new random person
  const nextPerson = () => {
    setShowsPassword(false);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.results[0]);
        setImage(json.results[0].picture.large.toString());
        setName(json.results[0].name);
        setPassword(json.results[0].login);
        dispatch(setPrevious(name.first));
      })
      .catch((err) => console.log(err));
  };

  // Func for showing password
  const clickPassword = () => {
    setShowsPassword(true);
  };

  return (
    <Provider store={store}>
      <View>
        <View style={styles.image}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>

        <Info
          first={name.first}
          second={name.last}
          phone={person.phone}
          cell={person.cell}
        />

        <View style={styles.buttons}>
          <TouchableOpacity onPress={nextPerson} style={styles.button}>
            <Text>See {previousPerson} Again?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={nextPerson} style={styles.button}>
            <Text>Next Person</Text>
          </TouchableOpacity>
        </View>

        <Card>
          <Password name={name.first} clickPassword={clickPassword} />
          {showsPassword ? (
            <Text style={styles.password}>{password.password}</Text>
          ) : null}
        </Card>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "gray",
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
  password: {
    backgroundColor: "#e3405b",
    padding: 3,
  },
});

export default Home;
