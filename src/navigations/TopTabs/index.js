import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BadgeAlls from '../../pages/Badge/BadgeAlls';
import BadgeNiveis from '../../pages/Badge/BadgeNiveis';
import BadgeConquistados from '../../pages/Badge/BadgeConquistados';

const Tab = createMaterialTopTabNavigator();

function TopTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12},
                tabBarStyle: { backgroundColor: '#FFF'}
            }}
        >
            <Tab.Screen name="Todos" component={BadgeAlls} options={{ headerShown: false }}/>
            <Tab.Screen name="Por Nível" component={BadgeNiveis} options={{ headerShown: false }}/>
            <Tab.Screen name="Conquistados" component={BadgeAlls} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

export default TopTabs;