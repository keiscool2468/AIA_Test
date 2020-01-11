import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/Login/LoginScreen';

const Navigator = createStackNavigator(
        {
            Home: LoginScreen
        },
        {
            initialRouteName: 'Home',
            headerMode: 'none'
        }
    )

const AppNavigator = (props) => {
    return (
        <Navigator navigation={props.navigation} />
    )
}
AppNavigator.router = Navigator.router

export default AppNavigator;