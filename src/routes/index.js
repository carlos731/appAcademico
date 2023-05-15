import React, { useContext, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import StackRoutes from './stack.routes';

import { AuthContext } from '../context/AuthContext';


function Routes() {
    const { isAuthenticated, loading } = useContext(AuthContext);
    //const isNavigation = false;

    if (loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={60} color="#f8922c" />
            </View>
        )
    }

    return (
        isAuthenticated ? <StackRoutes /> : <AuthRoutes />
    );

    // if(drawer === true){
    //     return (
    //         isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    //     );
    // }

    // if(drawer === false){
    //     return (
    //         isAuthenticated ? <StackRoutes/> : <AuthRoutes />
    //     );
    // }
}

export default Routes;