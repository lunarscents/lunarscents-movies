import React from "react";

import { TEXT, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <>
    <TEXT>MOVIES</TEXT>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to detail</Text>
    </TouchableOpacity>
  </>
);
