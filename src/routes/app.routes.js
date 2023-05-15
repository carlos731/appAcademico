import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard';

import CustomDrawer from '../navigations/CustomDrawer';

import { useNavigation } from '@react-navigation/native';


import AuthRoutes from './auth.routes';
import Badge from '../pages/Badge';

import TabRoutes from '../navigations/BottomTabs';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function AppRoutes(){
    const navigation = useNavigation();

    return(
        <Drawer.Navigator
            backBehavior="history"
            screenOptions={{
              headerShown: false,
              drawerStyle: {
                backgroundColor: '#1e1d2e',
                // width: 200,
              },
              drawerLabelStyle: {
                fontWeight: 'bold',
                color: '#FFF',
              },
              drawerActiveTintColor: '#FFF',
              drawerActiveBackgroundColor: '#00b94a',
              drawerInactiveBackgroundColor: '#1e1d2e',
              drawerItemStyle: {
                marginVertical: 5,
                backgroundColor: 'blue'
              },
            }}
            // drawerContentOptions={{
            //   labelStyle: { color: 'blue '},
            //   activeBackgroundColor: 'blue',
            //   inactiveBackgroundColor: 'red',
            // }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="TabNavigator" component={TabRoutes} />
            {/* <Drawer.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/> */}
            {/* <Drawer.Screen name="Badge" component={Badge} 
                options={{
                    title: 'Badges',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: '#FFF',
                      textAlign: 'center'
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                      <TouchableOpacity
                        style={{ marginRight: 15 }}
                      >
                        <Feather
                          name="settings"
                          size={24}
                          color="#FFF"
                        />
                      </TouchableOpacity>
                    ),
                    headerLeft: () => (
                      <TouchableOpacity
                        style={{ marginLeft: 15, marginRight: 10 }}
                        onPress={() => navigation.goBack()}
                      >
                        <Feather
                          name="arrow-left"
                          size={24}
                          color="#FFF"
                        />
                      </TouchableOpacity>
                    ),
                  }}
            /> */}
        </Drawer.Navigator>
    );
}

export default AppRoutes;