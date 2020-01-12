
import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {GeneralStyles} from '../../styles/GeneralStyles';

//checking is user is logon or not
const AuthLoadingScreen = (props) => {

    useEffect(() => {
        AsyncStorage.getItem("username").then((username) => {
            props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    //Navigate to APP navigation Stack if have login
                    //Navigate to Auth navigation Stack if have not login
                    NavigationActions.navigate({ routeName: username ? 'App' : 'Auth'}),
                ]
            }));
        })
    }, [])

    return (
        <View style={[GeneralStyles.container]}>
            <ActivityIndicator />
        </View>
    )
}

export default AuthLoadingScreen;