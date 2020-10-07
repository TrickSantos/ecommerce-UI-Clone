import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

/* import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Recuperar from "../screens/Recuperar";
import App from "./app.routes"; */
import Shop from "../screens/Shop";
import Catalogo from "../screens/Catalogo";

const ShopStack = createStackNavigator();

const ShopRoutes = () => (
  <ShopStack.Navigator initialRouteName="Categories">
    <ShopStack.Screen
      name="Categories"
      component={Shop}
      options={{
        headerShown: true,
        title: "Categorias",
        headerTitleAlign: "center",
        headerLeft: (props) => (
          <HeaderBackButton {...props} onPress={() => {}} />
        ),
      }}
    />
    <ShopStack.Screen
      name="Catalogo"
      component={Catalogo}
      options={{
        headerShown: true,
        title: "Women's Tops",
        headerTitleAlign: "center",
        headerLeft: (props) => (
          <HeaderBackButton {...props} onPress={() => {}} />
        ),
      }}
    />
  </ShopStack.Navigator>
);

export default ShopRoutes;
