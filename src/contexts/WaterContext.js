import React, { useState, useEffect } from "react";
import lodash from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import {getPassedWeek} from "../helpers/DatetimeHelper";
export const WaterContext = React.createContext({});

const WaterProvider = props => {
    const [volumnOfWeek, setVolumnOfWeek] = useState({});

    getUsername = () => {
        return new Promise((resolve) => {
            AsyncStorage.getItem('username').then(result => {
                resolve(result)
            })
        })
    }

    getVolumns = (username) => {
        return new Promise((resolve) => {
            AsyncStorage.getItem(`${username}-volumns`).then(result => {
                resolve(result)
            })
        })
    }

    setVolumns = (newVolumns) => {
        getUsername().then(async (username) => {
            await AsyncStorage.getItem(`${username}-volumns`, JSON.stringify(newVolumns))
        })
    }

    createVolumeOfWeek = () => {
        const dateArr = getPassedWeek();
        const passedWeekObj = {};
        lodash.forEach(dateArr, (date) => {
            passedWeekObj[date] = 0;
        })
        return passedWeekObj
    }

    updateVolumnOfWeek = (currentVolumnOfWeek) => {
        const newVolumnOfWeek = createVolumeOfWeek();
        lodash.forEach(newVolumnOfWeek, (date, volumn) => {
            newVolumnOfWeek[date] = currentVolumnOfWeek[date] || volumn;
        })
    }

    useEffect(() => {
        getUsername().then(username => {
            getVolumns(username).then(volumns => {
                if(volumns) {
                    setVolumnOfWeek(updateVolumnOfWeek(JSON.parse(volumns)))
                } else {
                    setVolumnOfWeek(createVolumeOfWeek())
                }
            })
        });
    }, [])

    return (
        <WaterContext.Provider
            value={{
                volumnOfWeek: volumnOfWeek,
                setVolumnOfWeek: ((newVolumnOfWeek) => {
                    setVolumns(newVolumnOfWeek)
                    setVolumnOfWeek(newVolumnOfWeek)
                })
            }}
        >
            {props.children}
        </WaterContext.Provider>
    );
};

export default WaterProvider