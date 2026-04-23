# 💰 FinanApp

Aplicativo mobile de controle financeiro desenvolvido com **React Native + Expo** e integrado ao **Supabase**.

---

## 📱 Sobre o projeto

O **FinanApp** é um app para gerenciamento de finanças pessoais, permitindo que o usuário:

* 📊 Visualize seus gastos
* ➕ Adicione categorias de despesas
* 🔐 Crie conta e faça login com autenticação
* 👤 Gerencie seu perfil
* 📈 Acompanhe análise de gastos em gráfico

---

## 🚀 Tecnologias utilizadas

* ⚛️ React Native
* 🚀 Expo
* 🔥 Supabase (Auth + Database)
* 🧭 React Navigation
* 🎨 Expo Linear Gradient
* 📊 react-native-svg

---

## 📸 Funcionalidades

* ✅ Cadastro de usuário
* ✅ Login com autenticação
* ✅ Perfil do usuário
* ✅ Edição de perfil
* ✅ Dashboard de gastos
* ✅ Gráfico de análise
* ✅ Navegação por abas (Tab Navigation)

---

## 📂 Estrutura do projeto

```bash
src/
 ├── components/
 ├── screens/
 ├── services/
 │    ├── supabase.ts
 │    └── auth.ts
 ├── routes/
 ├── css/
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_SUPABASE_URL=your_url_here
EXPO_PUBLIC_SUPABASE_KEY=your_key_here
```

⚠️ Nunca suba esse arquivo para o GitHub.

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# iniciar o projeto
npx expo start
```

---

## 📦 Build

Para gerar APK ou build:

```bash
npx expo run:android
```

ou use:

```bash
npx expo prebuild
```

---

## 🧠 Aprendizados

Durante o desenvolvimento foram trabalhados conceitos como:

* Context API
* Autenticação com Supabase
* Navegação entre telas
* Gerenciamento de estado
* Integração com banco de dados

---

## 📌 Próximas melhorias

* 🔔 Notificações
* 📊 Gráficos mais avançados
* 💾 Persistência de login
* 🌙 Modo escuro/claro
* 📱 Melhor UX/UI

---

## 👨‍💻 Autor

Desenvolvido por **Gustavo Carvalho, Luis Henrique e Josias Lima**

---

## ⭐ Contribuição

Sinta-se livre para abrir issues ou contribuir com melhorias!

---

## 📄 Licença

Este projeto está sob a licença MIT.
