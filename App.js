import React from "react";
import { AppLoading, Font, Asset } from "expo";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  state = {
    loaded: false
  };

  handleError = () => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });

    await Asset.loadAsync([require("images/icon.png")]);
  };

  return loaded ? (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  ) : (
    <AppLoading
      startAsync={this.loadAssets}
      onFinish={this.handleLoaded}
      onError={this.handleLoaded}
    />
  );
}
