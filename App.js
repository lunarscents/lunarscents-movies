import React from "react";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import TabNavigation from "./navigation/TabNavigation";

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
    <View style={styles.container}>
      <TabNavigation />
    </View>
  ) : (
    <AppLoading
      startAsync={this.loadAssets}
      onFinish={this.handleLoaded}
      onError={this.handleLoaded}
    />
  );
}
