import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; 
import { style } from "../css/cssPerfil";
import { useUser } from "../components/UserContext";

export default function EditProfile() {
  const { nome, setNome, email, setEmail, phone, setPhone } = useUser();
  const router = useRouter(); 

  const salvarEVoltar = () => {
    router.replace('/');
  };

  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#000000', '#0D1B2A']}
        style={style.headerGradient}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Editar meu perfil
        </Text>
      </LinearGradient>

      <View style={style.contentCard}>

        <View style={style.avatarContainer}>
          <Image 
            source={{ uri: 'https://img.freepik.com/vetores-gratis/circulos-de-utilizadores-definidos_78370-4704.jpg?semt=ais_hybrid&w=740&q=80' }} 
            style={style.avatar} 
          />
          <Text style={style.title}>{nome}</Text>
          <Text style={style.userId}>ID: 25030024</Text>
        </View>

        <ScrollView 
          contentContainerStyle={{ paddingBottom: 40 }} 
          showsVerticalScrollIndicator={false}
          style={{ width: '100%', marginTop: 80 }} 
        >
          <Text style={style.sectionTitle}>Gerenciar conta</Text>

          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>Nome de usuario</Text>
            <TextInput style={style.input} value={nome} onChangeText={setNome} />
          </View>

          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>Telefone</Text>
            <TextInput style={style.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          </View>

          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>Emails</Text>
            <TextInput style={style.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
          </View>

          <View style={style.rowBetween}>
            <Text style={{ color: '#fff' }}>Notificações</Text>
            <Switch value={true} trackColor={{ false: "#767577", true: "#00C49A" }} />
          </View>

        

          <TouchableOpacity 
            onPress={salvarEVoltar}
            style={{ backgroundColor: '#0003A9', padding: 12,borderRadius: 20,marginTop: 20,width: 250,marginBottom:20, alignSelf: 'center'
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
              Salvar alterações
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}