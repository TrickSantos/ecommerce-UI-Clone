import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Bag from "../screens/Bag";
import Profile from "../screens/Profile";
import Shop from "../screens/Shop";
import Favoritos from "../screens/Favoritos";

const AppTabs = createBottomTabNavigator();

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

const AppRoutes = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
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

export default AppRoutes;
