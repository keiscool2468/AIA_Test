import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/Login/LoginScreen';

const Navigator = createStackNavigator(
        {
            Login: LoginScreen
        },
        {
            initialRouteName: 'Login',
            headerMode: 'none'
        }
    )

const AuthNavigator = (props) => {
    return (
        <Navigator navigation={props.navigation} />
    )
}
AuthNavigator.router = Navigator.router

export default AuthNavigator;