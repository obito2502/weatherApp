import React, {useEffect, useState} from "react";
import {
    StyleSheet, 
    Text, 
    View, 
    Dimensions,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from "react-native-root-toast";

import getWeatherForDay from "../helpers/GetWeatherForDay";
import getFutureWeather from "../helpers/GetFutureWeather";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CityComponent = ({name, navigation, props}) => {

    const handleClick = () => {
        
        AsyncStorage.setItem('city', name).then(() => {
            navigation.navigate('Tabs', {screen: 'Day', params: {id: 'today'}})
        })
        
    }

    return (

        <TouchableOpacity style={styles.container} onPress={() => handleClick()}>

            <Text style={styles.text}>{name}</Text>

        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9, 
        height: 50,
        alignSelf: 'center', 
        backgroundColor: '#eeeee4', 
        marginBottom: 10, 
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    text: {
        fontWeight: '600', 
        color: 'black', 
        fontSize: 20,
    },
})

export default CityComponent;