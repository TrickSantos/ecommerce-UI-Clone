import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Bag from "../screens/Bag";
import Profile from "../screens/Profile";
import Shop from "../routes/shop.routes";
import Favoritos from "../screens/Favoritos";
import Product from "../screens/Product";

const AppTabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Shop: {
    lib: AntDesign,
    name: "shoppingcart",
  },
  Bag: {
    lib: Feather,
    name: "shopping-bag",
  },
  Favoritos: {
    lib: MaterialIcons,
    name: "favorite-border",
  },
  Profile: {
    lib: Feather,
    name: "user",
  },
};

const HomeRoutes = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={AppRoutes}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: true,
          title: "Women's Tops",
          headerTitleAlign: "center",
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => {}} />
          ),
        }}
      />
    </AppStack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        activeTintColor: "#DB3022",
        inactiveTintColor: "#9B9B9B",
      }}
    >
      <AppTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
      <AppTabs.Screen
        name="Shop"
        component={Shop}
        options={{ title: "Shop" }}
      />
      <AppTabs.Screen name="Bag" component={Bag} options={{ title: "Bag" }} />
      <AppTabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: "Favoritos" }}
      />
      <AppTabs.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </AppTabs.Navigator>
  );
};

export default HomeRoutes;
