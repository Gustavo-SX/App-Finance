import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { supabase } from "../services/supabase";

import Login from "../screens/Login";
import Acesso from "../screens/Acesso";
import Cadastro from "../screens/Cadastro";
import Redefinicao from "@/screens/Redefinicao";
import ResetSuccess from "@/screens/ResetSucess";

import Home from "@/screens/Home";
import Analise from "@/screens/Analise";
import Perfil from "@/screens/Perfil";
import EditPerfil from '@/screens/PerfilEdit'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analise" component={Analise} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="EditPerfil" component={EditPerfil} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user ?? null);
    setLoading(false);
  }

  if (loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {user ? (
      
        <Stack.Screen name="App" component={TabRoutes} />
      
      ) : (
    
        <>
          <Stack.Screen name="Acesso" component={Acesso} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Redefinicao" component={Redefinicao} />
          <Stack.Screen name="ResetSucess" component={ResetSuccess} />
        </>
      )}

    </Stack.Navigator>
  );
}