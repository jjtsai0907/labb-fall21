import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  // Fetching data from RandomUser API
  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results[0].gender);
    })
    .catch((err) => console.log(err));
  }, []);



  return (
    <View >
      
      
      <Text>Labb Fall21</Text>
      
    </View>
  );
}


