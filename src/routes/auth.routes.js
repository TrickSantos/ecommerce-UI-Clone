import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Recuperar from "../screens/Recuperar";

const AppStack = createStackNavigator();

const LoginRoutes = () => (
  <AppStack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppStack.Screen name="Login" component={Login} />
    <AppStack.Screen name="Cadastro" component={Cadastro} />
    <AppStack.Screen name="Recuperar" component={Recuperar} />
  </AppStack.Navigator>
);

export default LoginRoutes;
