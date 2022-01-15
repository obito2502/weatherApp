import React, {useEffect, useState} from "react";
import {
    Dimensions,
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    Image,
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const SearchComponent = ({name, ...props}) => {
    const [has, setHas] = useState(false)

    useEffect(() => {

       getData()

    }, [])

    function getData() {

        AsyncStorage.getItem('chosen').then((data) => {

            if(data != null) {

                var chosenArr = []; 
                chosenArr = JSON.parse(data)

                if(chosenArr.includes(name)) {
       
                    setHas(true)

                } else {

                    setHas(false)

                }

            }

        })

    }

    function renderTick() {
        
        if(has == false) {
            return null
        } else {
            return (
                <Image 
                    style={styles.tick}
                    source={require('../../assets/images/tick.png')}
                />
            )
        }

    }

    function chooseCity() {
        var result = []

        AsyncStorage.getItem('chosen').then((data) => {

            if(data != null) {
                result = JSON.parse(data)

                if(result.includes(name)) {
                    result.splice(result.indexOf(name), 1)
                } else {
                    result.push(name)
                }
                

                AsyncStorage.setItem('chosen', JSON.stringify(result))
                getData()
            } else {

                result.push(name)
                AsyncStorage.setItem('chosen', JSON.stringify(result))
                getData()

            }

        })

    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.body} onPress={() => chooseCity()}>

                <Text style={styles.text}>
                    {name}
                </Text>

                <View style={styles.tickView}>

                    {renderTick()}

                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9, 
        height: 50, 
        backgroundColor: '#eeeee4', 
        borderRadius: 10, 
        alignSelf: 'center', 
        justifyContent: 'center', 
        marginBottom: 10
    }, 
    body: {
        width: '80%', 
        alignSelf: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    text: {
        fontWeight: '600', 
        color: 'black'
    }, 
    tickView: {
        width: 40, 
        height: 40,
        alignSelf: 'center', 
        justifyContent: 'center'
    }, 
    tick: {
        height: 30, 
        width: 30,
        alignSelf: 'center'
    },
})

export default SearchComponent;