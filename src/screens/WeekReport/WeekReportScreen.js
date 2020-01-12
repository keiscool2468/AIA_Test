import React, {useContext} from 'react';
import {
  View,
  Text,
} from 'react-native';
import lodash from 'lodash';
import {WaterContext} from '../../contexts/WaterContext'
import {GeneralStyles} from '../../styles/GeneralStyles';
import BarChart from '../../components/BarChart/BarChart';

const TARGET_VOLUMN = 2000;
const WeekReportScreen = (props) => {
    const {volumnOfWeek, setVolumnOfWeek} = useContext(WaterContext)

    //function to convert data from object structure to array structure
    handleLabelForDisplay = () => {
        let newData = [];
        newData = lodash.map(volumnOfWeek, (data, date) => {
            return {label: date.split('-')[2], value: data}
        })
        return newData
    }

    return (
        <View style={[GeneralStyles.container]}>
            <Text style={[GeneralStyles.title]}>
                How Much You Drink This Week?
            </Text>

            <BarChart target={TARGET_VOLUMN} data={handleLabelForDisplay()}/>

        </View>
    );
};

export default WeekReportScreen;