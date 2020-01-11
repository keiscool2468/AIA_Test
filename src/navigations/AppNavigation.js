import React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/Login/LoginScreen';

const Navigator = createBottomTabNavigator(
        {
            Home: {
                screen: LoginScreen
            },
            Today: {
                screen: LoginScreen,
            },
            Logout: {
                screen: LoginScreen,
                navigationOptions: {
                    tabBarOnPress: async (props) => {
                        await AsyncStorage.removeItem('username')
                        props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'AuthLoading'}),
                            ]
                        }));
                    }
                }
            }
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