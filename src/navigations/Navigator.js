import React, {useEffect} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import AuthLoadingScreen from '../screens/AuthLoading/AuthLoadingScreen';

const Navigator = () => {
  	return (
    	createStackNavigator(
        	{
				AuthLoading: AuthLoadingScreen,
				Auth: AuthNavigation,
				App: AppNavigation
			},
			{
				initialRouteName: 'AuthLoading',
				headerMode: 'none'
			}
    	)
  	)
};

export default createAppContainer(Navigator());