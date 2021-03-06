import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = () => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    return loaded ? (
      <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
      </>
    ) : (
      <AppLoading
        startAsync={this.loadAssets}
        onFinish={this.handleLoaded}
        onError={this.handleError}
      />
    );
  }
}
