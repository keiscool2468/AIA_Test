import React, {useEffect} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer  } from 'react-navigation';
import AuthNavigation from './AuthNavigation';

const Navigator = (props) => {
  	return (
    	createStackNavigator(
        	{
				Auth: AuthNavigation
			},
			{
				initialRouteName: 'Auth',
				headerMode: 'none'
			}
    	)
  	)
};

export default createAppContainer(Navigator());