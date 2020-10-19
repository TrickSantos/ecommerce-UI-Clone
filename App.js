import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  RobotoMono_400Regular,
} from "@expo-google-fonts/dev";
import { AppLoading } from "expo";
import App from "./src";

export default function Main() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    RobotoMono_400Regular,
    Metropolis_Black: require("./assets/fonts/metropolis/Metropolis-Black.otf"),
    Metropolis_Bold: require("./assets/fonts/metropolis/Metropolis-Bold.otf"),
    Metropolis_Medium: require("./assets/fonts/metropolis/Metropolis-Medium.otf"),
    Metropolis_Regular: require("./assets/fonts/metropolis/Metropolis-Regular.otf"),
    Metropolis_SemiBold: require("./assets/fonts/metropolis/Metropolis-SemiBold.otf"),
    Metropolis_Thin: require("./assets/fonts/metropolis/Metropolis-Thin.otf"),
  });

  return !fontsLoaded ? <AppLoading /> : <App />;
}
