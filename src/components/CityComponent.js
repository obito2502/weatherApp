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


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CityComponent = ({name, navigation, props}) => {

    const handleClick = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d7b00e3b1c8cc224e73f52f2cf64a792`, {
            method: 'GET', 
            headers: {}
        }).then(response => response.json()).
        then(responseJson => {

            AsyncStorage.setItem('city', name)
            
            props.navigation.navigate('Tabs', { 
                screen: 'Day',
                params: {data: responseJson, id: true}
            })

        }).
        catch((error) => {
            Toast.show('Проверьте введенные данные', {
                duration: Toast.durations.SHORT, 
                position: Toast.positions.CENTER
            })
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