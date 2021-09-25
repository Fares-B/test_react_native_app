import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Views from "./src/views";
import APP_ROUTES from "./src/AppRoutes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>

        <Stack.Screen
          name={APP_ROUTES.home}
          component={Views.Home}
        />

        <Stack.Screen
          name={APP_ROUTES.signIn}
          component={Views.SignIn}
        />

        <Stack.Screen
          name={APP_ROUTES.signUp}
          component={Views.SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
