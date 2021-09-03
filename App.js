import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./components/Home";
import { View } from "react-native";
import { RootReducer } from "./components/RootReducer";

export default function App() {
  // Redux Store
  const store = configureStore({
    reducer: RootReducer,
  });

  return (
    <Provider store={store}>
      <View>
        <Home />
      </View>
    </Provider>
  );
}
