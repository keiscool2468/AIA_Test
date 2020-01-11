import React, {useEffect} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const Navigator = (props) => {
  	return (
    	createStackNavigator(
        	{
				Auth: AuthNavigation,
				App: AppNavigation
			},
			{
				initialRouteName: 'Auth',
				headerMode: 'none'
			}
    	)
  	)
};

export default createAppContainer(Navigator());