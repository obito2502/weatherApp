import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView,
    Dimensions, 
    TouchableOpacity, 
    FlatList,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CityComponent from "../../components/CityComponent";
import Moment from 'moment';
import Toast from "react-native-root-toast";

import weatherList from "./weatherList";
import WeatherComponent from "../../components/WeatherComponent";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class NextDaysScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {}
        }


    }

    componentDidMount() {

        AsyncStorage.getItem('city').then((city) => {

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d7b00e3b1c8cc224e73f52f2cf64a792`, {
                method: 'GET', 
                headers: {}
            }).then((response) => response.json()).
            then((responseJson) => {
                this.setState({data: responseJson.list})
            }).
            catch((error) => {
                Toast.show('Проверьте введенные данные', {
                    duration: Toast.durations.SHORT, 
                    position: Toast.positions.CENTER
                })
            })

        })

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.reset({
                        index: 0, 
                        routes: [{name: 'Main'}]
                    })}>

                        <Image 
                            style={styles.backIcon}
                            source={require('../../../assets/images/backIcon.png')}
                        />

                    </TouchableOpacity>

                    <View>

                        <Text style={styles.headerText}>
                            Weather for future
                        </Text>

                    </View>

                </View>

                <View style={styles.body}>

                    <FlatList 
                        data={this.state.data}
                        renderItem={({item, index}) => <WeatherComponent day={item} navigation={this.props.navigation}/>}
                        style={styles.flatlist}
                    />

                </View>

            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
    }, 
    header: {
        flex: 1, 
        width: width * 0.9,
        flexDirection: 'row', 
        alignSelf: 'center', 
        justifyContent: 'space-between', 
        marginTop: 15, 
        borderBottomColor: 'grey', 
        borderBottomWidth: 1,
    }, 
    headerText: {
        fontWeight: '600', 
        fontSize: 20, 
        color: 'black', 
        alignSelf: 'center'
    },
    body: {
        flex: 15,
    }, 
    backButton: {
        height: 40, 
        width: 40, 
    }, 
    backIcon: {
        height: 35, 
        width: 35
    }, 
    flatlist: {
        marginTop: 10,
    },
})
