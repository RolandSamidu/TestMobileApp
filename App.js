import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
//import Login from './src/Login';
import PresList from './src/PresListView/PresList';
import DetailBack from './src/PreDetailView/DetailBack';
import GMapBack from './src/GMapView/GMapBack';
import PharmacyBack from './src/PhaList/PharmacyBack';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PresList" component={PresList} />
        <Stack.Screen name="DetailBack" component={DetailBack} />
        <Stack.Screen name="GMapBack" component={GMapBack} />
        <Stack.Screen name="PharmacyBack" component={PharmacyBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;