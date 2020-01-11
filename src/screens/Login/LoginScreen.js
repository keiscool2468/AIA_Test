import React from 'react';
import {
  TextInput,
  View,
  Text,
  Button
} from 'react-native';
import {LoginStyles} from './LoginStyles';
import {GeneralStyles} from '../../styles/GeneralStyles';

const LoginScreen = () => {

    const onChangeText = (value, key) => {
        
    }

    const onClickLogin = () => {

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
                        style={[GeneralStyles.textInput]}
                        onChangeText={(text) => onChangeText(text, 'account')}
                    />
                </View>

                <View style={[{marginTop: 10}]}>
                    <Text style={[GeneralStyles.label]}>
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={[GeneralStyles.textInput]}
                        onChangeText={(text) => onChangeText(text, 'password')}
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