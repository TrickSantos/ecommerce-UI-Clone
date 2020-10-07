import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Recuperar from "../screens/Recuperar";
import App from "./app.routes";

const AppStack = createStackNavigator();

const LoginRoutes = () => (
  <AppStack.Navigator initialRouteName="App">
    <AppStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Recuperar"
      component={Recuperar}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="App"
      component={App}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default LoginRoutes;
