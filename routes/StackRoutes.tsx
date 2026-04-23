import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Routes from "./index"; 
import Redefinicao from "../screens/Redefinicao";
import Acesso from "@/screens/Acesso";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Acesso" component={Acesso} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Routes} />
      <Stack.Screen name="Redefinicao" component={Redefinicao} />
    </Stack.Navigator>
  );
}