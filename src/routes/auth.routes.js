import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Badge from '../pages/Badge';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="LOGIN" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={SignIn} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;