import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './components/UserContext';
import StackRoutes from './routes/StackRoutes';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UserProvider>
  );
}