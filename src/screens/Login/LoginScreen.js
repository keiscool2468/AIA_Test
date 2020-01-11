import React from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import {LoginStyles} from './LoginStyles';
import {GeneralStyles} from '../../styles/GeneralStyles';

const LoginScreen = () => {

    const onChangeText = (value, key) => {

    }

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                AIA Testing
            </Text>

            <View style={[GeneralStyles.cardView, LoginStyles.cardView]}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => onChangeText(text, 'account')}
                />
                <TextInput
                    secureTextEntry={true}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => onChangeText(text, 'password')}
                />
            </View>
        </View>
    );
};

export default LoginScreen;