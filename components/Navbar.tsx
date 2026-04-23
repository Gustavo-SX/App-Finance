import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import Home from "../screens/Home";
import Analise from "../screens/Analise";
import ProfileScreen from "../screens/Perfil";
import EditProfile from "../screens/PerfilEdit";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

      
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 15,
          right: 15,
          elevation: 10,
          backgroundColor: "#0f172a",
          borderRadius: 20,
          height: 65,
          borderTopWidth: 0,

          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
        },

        tabBarActiveTintColor: "#22c55e",
        tabBarInactiveTintColor: "#64748b",


        tabBarIcon: ({ color, focused }) => {
          let iconName = "circle";

          if (route.name === "Home") iconName = "home";
          if (route.name === "Analytics") iconName = "bar-chart-2";
          if (route.name === "Profile") iconName = "user";
          if (route.name === "Config") iconName = "settings";

          return (
            <View
              style={{
                backgroundColor: focused ? "#22c55e20" : "transparent",
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Icon name={iconName} size={20} color={color} />
            </View>
          );
        },

       
        tabBarLabel: ({ color, focused }) => (
          <Text
            style={{
              color: focused ? "#22c55e" : "#94a3b8",
              fontSize: 11,
              marginTop: -5,
              fontWeight: focused ? "600" : "400",
            }}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analse" component={Analise} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="EditPerfil" component={EditProfile} />
    </Tab.Navigator>
  );
}