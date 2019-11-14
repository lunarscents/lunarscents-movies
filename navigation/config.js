import { createStackNavigator } from "react-navigation";
import { BG_COLOR, TINT_COLOR } from "../constants/colors";

export const headerStyles = {
  headerStyles: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  },
  headerTintColor: TINT_COLOR
};

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: { screen, navigationOptions: { title, ...headerStyles } }
  });
