import React from 'react';
import {
  View,
  Text
} from 'react-native';
import lodash from 'lodash';
import {GeneralStyles} from '../../styles/GeneralStyles';
import {BarChartStyles} from './BarChartStyles';
/**
 * General component for display Bar char
 * @param props 
 *  - target: number
 *  - data [{label:string, value: number}]
 */
const BarChart = (props) => {
    renderBar = (item, index) => {
        //random color for each bar
        let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        //calculate the height proportion
        let height = item.value ? (item.value/props.target) * 150 : 0;
        
        return (
            <View key={index} style={[BarChartStyles.dataBar, {backgroundColor: color, height: height}]}>
            </View>
        )
    }

    renderLabel = (item, index) => {
        return (
            <View key={index} style={[BarChartStyles.labelContainer]}>
                <Text style={[BarChartStyles.label]}>
                    {item.label}
                </Text>
            </View>
        )
    }

    return (
        <View style={[GeneralStyles.cardView, BarChartStyles.cardView]}>

            <View style={[BarChartStyles.chartWrapper]}>
                {props.target && <View style={[BarChartStyles.targetWrapper]}>
                    <View style={[BarChartStyles.targetRow]}>
                        <Text>{props.target}</Text>
                        <View style={[BarChartStyles.targetline]}></View>
                    </View>
                </View>}

                <View style={[BarChartStyles.chartBodyWrapper]}>
                    <View style={[BarChartStyles.chartBody]}>
                        {lodash.map(props.data, renderBar)}
                    </View>
                    <View style={[BarChartStyles.labelsWrapper]}>
                        {lodash.map(props.data, renderLabel)}
                    </View>
                </View>
                
            </View>
        </View>
    )
}


export default BarChart;