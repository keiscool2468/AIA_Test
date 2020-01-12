import React, {useState, useContext} from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import {WaterContext} from '../../contexts/WaterContext'
import {GeneralStyles} from '../../styles/GeneralStyles';


const EditWaterScreen = (props) => {
    const {} = useContext(WaterContext)

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                Edit
            </Text>
        </View>
    );
};

export default EditWaterScreen;