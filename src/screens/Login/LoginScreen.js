import React, {useState} from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import {LoginStyles} from './LoginStyles';
import {Login} from '../../agents/Auth'
import {GeneralStyles} from '../../styles/GeneralStyles';
const LoginScreen = (props) => {
    const [loginForm, setLoginForm] = useState({username: '', password: ''});

    const onClickLogin = () => {
        if(!loginForm.username) {
            Alert.alert(
                'Missing Username',
                null,
                [
                    {text: 'OK'}
                ]
            );
            return;
        }
        if(!loginForm.password) {
            Alert.alert(
                'Missing Password',
                null,
                [
                    {text: 'OK'}
                ]
            );
            return;
        }
        Login(loginForm, (result, errMsg) => {
            if(errMsg) {
                Alert.alert(
                    errMsg,
                    null,
                    [
                        {text: 'OK'}
                    ]
                );
            }
            if(result) {
                props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'App'}),
                    ]
                }));
            }
        })
    }

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                AIA Want You Drink Water
            </Text>

            <View style={[GeneralStyles.cardView, LoginStyles.cardView]}>
                <View>
                    <Text style={[GeneralStyles.label]}>
                        Username
                    </Text>
                    <TextInput
                        autoCapitalize='none'
                        style={[GeneralStyles.textInput]}
                        onChangeText={(text) => setLoginForm({...loginForm, username: text})}
                    />
                </View>

                <View style={[{marginTop: 15}]}>
                    <Text style={[GeneralStyles.label]}>
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={[GeneralStyles.textInput]}
                        onChangeText={(text) => setLoginForm({...loginForm, password: text})}
                    />
                </View>
                <View style={[{marginTop: 10}]}>
                    <Button
                        title="Login"
                        onPress={onClickLogin}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;