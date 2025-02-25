import React, {useState, useContext, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import lodash from 'lodash';
import {getHKnewDate, getYYYYMMDD} from '../../helpers/DatetimeHelper'
import {WaterContext} from '../../contexts/WaterContext'
import {GeneralStyles} from '../../styles/GeneralStyles';
import {EditWaterStyles} from './EditWaterStyles';
import BarChart from '../../components/BarChart/BarChart';

const TARGET_VOLUMN = 2000;
const EditWaterScreen = (props) => {
    const {volumnOfWeek, setVolumnOfWeek} = useContext(WaterContext)
    const [volumnOfDay, setVolumnOfDay] = useState(0);
    const [addVolumn, setAddVolumn] = useState(null);
    const [modifyVolumn, setModifyVolumn] = useState(null);

    const targetDate = props.targetDate || getYYYYMMDD(getHKnewDate());
    const isCurrentDate = (!props.targetDate);

    getVolumnOfDay = () => {
        return volumnOfWeek[targetDate];
    }

    //add water event handler
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

        volumnOfWeek[targetDate] = sumOfVolumn;
        setVolumnOfWeek(volumnOfWeek);
        setAddVolumn(null)
    }

    //modify water event handler
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

        volumnOfWeek[targetDate] = parseInt(modifyVolumn);
        setVolumnOfWeek(volumnOfWeek);
        setModifyVolumn(null)
    }

    //remove water event handler
    onClickRemove = () => {
        volumnOfWeek[targetDate] = 0;
        setVolumnOfWeek(volumnOfWeek);
    }

    //function to convert data from object structure to array structure
    handleLabelForDisplay = () => {
        let newData = [];
        newData = lodash.map(volumnOfWeek, (data, date) => {
            return {label: date.split('-')[2], value: data}
        })
        return newData
    }

    useEffect(() => {
        setVolumnOfDay(getVolumnOfDay())
    }, [volumnOfWeek])

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                How Much You Drink Today?
            </Text>

            <BarChart target={TARGET_VOLUMN} data={[{label: targetDate, value: volumnOfDay}]}/>

            <Text style={[GeneralStyles.title, {marginTop: 20}]}>
                {volumnOfDay} ml
            </Text>

            <View style={[EditWaterStyles.cardContainer]}>
                <View style={[GeneralStyles.cardView, EditWaterStyles.cardView]}>
                    <Text style={[GeneralStyles.label]}>
                        Add Here
                    </Text>
                    <TextInput
                        value={addVolumn && addVolumn.toString()}
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
                        value={modifyVolumn && modifyVolumn.toString()}
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

            {isCurrentDate && 
                <View style={[GeneralStyles.cardView, {marginTop: 20}]}>
                    <Button
                        color="#f00"
                        title="Remove"
                        onPress={onClickRemove}
                    />
                </View>
            }
        </View>
    );
};

export default EditWaterScreen;