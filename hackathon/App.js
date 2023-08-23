import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/routes/RootDrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}