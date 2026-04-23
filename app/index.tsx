// app/index.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { style, theme } from './style'; 
import { Ionicons } from '@expo/vector-icons';
import { useUser } from './UserContext';
import { useRouter } from 'expo-router';


const ProfileOption = ({ icon, title, onPress }: { icon: any, title: string, onPress?: () => void }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#333', width: '100%' }}
  >
    <View style={{ backgroundColor: '#0d0368', padding: 10, borderRadius: 12, marginRight: 15 }}>
      <Ionicons name={icon} size={22} color="#ffffff" />
    </View>
    <Text style={{ flex: 1, fontSize: 16, color: '#fff', textTransform: 'capitalize' }}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#777" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const { nome } = useUser(); 
  const router = useRouter(); 

  return (
    <View style={style.container}>
      <LinearGradient colors={["#000000", "#0D1B2A"]} style={style.headerGradient}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
      </LinearGradient>

      <View style={style.contentCard}>
        <View style={style.avatarContainer}>
          <Image source={{ uri: 'https://img.freepik.com/vetores-gratis/circulos-de-utilizadores-definidos_78370-4704.jpg?semt=ais_hybrid&w=740&q=80' }} style={style.avatar} />
        </View>

        <Text style={style.userName}>{nome}</Text>
        <Text style={style.userId}>ID: 25030024</Text>

        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
         
          <ProfileOption 
            icon="person-outline" 
            title="Editar perfil" 
            onPress={() => router.push('/edit_perfil')} 
          />
          <ProfileOption icon="shield-checkmark-outline" title="segurança" />
          <ProfileOption icon="settings-outline" title="configuração" />
          <ProfileOption icon="help-circle-outline" title="ajuda" />
          <ProfileOption icon="log-out-outline" title="sair da conta" />
        </ScrollView>
      </View>
    </View>
  );
}
