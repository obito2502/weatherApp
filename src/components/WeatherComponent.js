import React from "react";
import {
    StyleSheet, 
    View,
    FlatList, 
    Text, 
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import moment from "moment";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const WeatherComponent = ({day, navigation, ...props}) => {

    const handleClick = () => {
        navigation.navigate('FutureDays', {data: day})
    }   

    const renderTime = (timeUTC) => {
        let date = new Date(timeUTC * 1000)
        let formatted = moment(date).format('DD ddd, HH:MM')

        return formatted
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => handleClick()}>

            <View style={styles.body}>

                <Text style={styles.dateText}>
                    {renderTime(day.dt)}
                </Text>

                <Text style={styles.tempText}>
                    {day.main.temp}°C
                </Text>

            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9, 
        height: 50,
        backgroundColor: '#eeeee4', 
        alignSelf: 'center', 
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
    }, 
    body: {
        alignSelf: 'center', 
        width: '90%', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
    }, 
    dateText: {
        fontSize: 18,
        color: 'black',
    }, 
    tempText: {
        fontSize: 18,
        color: 'black'
    },
})

export default WeatherComponent;