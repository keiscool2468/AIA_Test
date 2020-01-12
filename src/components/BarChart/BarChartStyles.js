import {StyleSheet} from 'react-native';

export const BarChartStyles = StyleSheet.create({
    cardView: {
        width: '75%',
        padding: 10,
        marginTop: 20
    },
    chartBodyWrapper: {
        flex: 5
    },
    chartBody: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderColor: 'gray', 
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        height: 160,
        marginLeft: 5,
        paddingHorizontal: 10
    },
    chartWrapper: {
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden'
    },
    targetWrapper: {
        flex: 1,
        top: 10,
        zIndex: 2
    },
    targetRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 1000
    },
    targetline: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 1,
        flex:1
    },
    dataBar: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5
    },
    data: {
        color: '#fff',
    },
    labelsWrapper: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    labelContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5
    },
    label: {
        fontSize: 12
    }
});