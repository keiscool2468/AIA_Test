import React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/Login/LoginScreen';
import EditWaterScreen from '../screens/EditWater/EditWaterScreen';
import WaterProvider from '../contexts/WaterContext';

const Navigator = createBottomTabNavigator(
        {
            Week: {
                screen: LoginScreen
            },
            Today: {
                screen: EditWaterScreen,
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
            initialRouteName: 'Today',
            headerMode: 'none'
        }
    )

const AppNavigator = (props) => {
    return (
       <WaterProvider>
           <Navigator navigation={props.navigation} />
       </WaterProvider>
    )
}
AppNavigator.router = Navigator.router

export default AppNavigator;