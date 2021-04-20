import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import GroupsScreen from "./GroupsScreen";
import Menu from "./Menu";

const Drawer = createDrawerNavigator();

const customDrawerContent = () => {
  return <Menu />
};

function AppNavigator() {
  return (
    <Drawer.Navigator drawerPosition="right" drawerContent={customDrawerContent} initialRouteName="GroupsScreen">
      <Drawer.Screen
        name="GroupsScreen"
        component={GroupsScreen}
        options={{
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <AppNavigator />
    </NavigationContainer>
  );
}
