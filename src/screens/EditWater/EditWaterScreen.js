import React, {useState, useContext, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import {getHKnewDate, getYYYYMMDD} from '../../helpers/DatetimeHelper'
import {WaterContext} from '../../contexts/WaterContext'
import {GeneralStyles} from '../../styles/GeneralStyles';
import {EditWaterStyles} from './EditWaterStyles';

const TARGET_VOLUMN = 2000;
const EditWaterScreen = (props) => {
    const {volumnOfWeek, setVolumnOfWeek} = useContext(WaterContext)
    const [volumnOfDay, setVolumnOfDay] = useState(0);
    const [addVolumn, setAddVolumn] = useState(0);
    const [modifyVolumn, setModifyVolumn] = useState(0);

    getVolumnOfDay = () => {
        if(props.targetDate) {
            return volumnOfWeek[volumnOfDay];
        } else {
            let todayDateString = getYYYYMMDD(getHKnewDate());
            return volumnOfWeek[todayDateString];
        }
    }

    onClickAdd = () => {
        if(!addVolumn) {
            Alert.alert(
                'Missing Add Volumn',
                null,
                [
                    {text: 'OK'}
                ]
            );
            return;
        }

        const sumOfVolumn = parseInt(addVolumn)+parseInt(volumnOfDay)
        setVolumnOfDay(sumOfVolumn)
    }

    onClickModify = () => {
        if(!modifyVolumn) {
            Alert.alert(
                'Missing Add Volumn',
                null,
                [
                    {text: 'OK'}
                ]
            );
            return;
        }

        setVolumnOfDay(parseInt(modifyVolumn))
    }

    useEffect(() => {
        setVolumnOfDay(getVolumnOfDay())
    }, [volumnOfWeek])

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                How Much You Drink Today?
            </Text>
            <Text style={[GeneralStyles.title]}>
                {volumnOfDay} ml
            </Text>

            <View style={[EditWaterStyles.cardContainer]}>
                <View style={[GeneralStyles.cardView, EditWaterStyles.cardView]}>
                    <Text style={[GeneralStyles.label]}>
                        Add Here
                    </Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={[GeneralStyles.textInput, {paddingHorizontal: 10}]}
                        onChangeText={(amount) => setAddVolumn(amount)}
                    />
                    <Button
                        title="Add"
                        onPress={onClickAdd}
                    />
                </View>

                <View style={[GeneralStyles.cardView, EditWaterStyles.cardView]}>
                    <Text style={[GeneralStyles.label]}>
                        Modify Here
                    </Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={[GeneralStyles.textInput, {paddingHorizontal: 10}]}
                        onChangeText={(amount) => setModifyVolumn(amount)}
                    />
                    <Button
                        title="Modify"
                        onPress={onClickModify}
                    />
                </View>
            </View>
        </View>
    );
};

export default EditWaterScreen;