import React, { createContext, useState, useContext } from 'react';


const UserContext = createContext<any>(undefined);
interface UserContextData {
  nome: string;
  setNome: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [nome, setNome] = useState("gustavo");
  const [email, setEmail] = useState("example@email.com");
  const [phone, setPhone] = useState("+44 555 5555 55");

  return (
    <UserContext.Provider value={{ nome, setNome, email, setEmail, phone, setPhone }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};