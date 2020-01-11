import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const AppNavigator = () => createStackNavigator(
    {
      Home: HomeScreen,
      Login: LoginScreen
    },
    {
      initialRouteName: 'Login',
    }
);

export default AppNavigator;