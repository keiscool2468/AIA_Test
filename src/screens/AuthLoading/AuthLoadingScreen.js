
import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {GeneralStyles} from '../../styles/GeneralStyles';

const AuthLoadingScreen = (props) => {

    useEffect(() => {
        AsyncStorage.getItem("username").then((username) => {
            props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
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