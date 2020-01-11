import {StyleSheet} from 'react-native';

export const GeneralStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
    },
    cardView: {
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1.0,
        borderRadius: 4,
        backgroundColor: `#fff`,
    },
    textInput: { 
        borderColor: 'gray', 
        borderBottomWidth: 1 
    }
});