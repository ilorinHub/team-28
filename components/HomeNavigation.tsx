import PlanTrip from "../screens/PlanTrip";
import ShortestPath from "../screens/ShortestPath";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wallet from "../screens/Wallet";

export type StackList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  PlanTrip: undefined;
  ShortestPath: undefined;
  Wallet: undefined;

};

const Stack = createNativeStackNavigator<StackList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlanTrip"
        component={PlanTrip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShortestPath"
        component={ShortestPath}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
