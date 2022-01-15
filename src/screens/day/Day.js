import React, {useEffect} from "react";
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

import moment from "moment";
import getWeatherForDay from "../../helpers/GetWeatherForDay";
import { ScrollView } from "react-native-gesture-handler";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class DayScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            name: ''
        }

    }

    async getData(name) {

        var result = await getWeatherForDay('name')

        this.setState({data: result})

    }

   componentDidMount() {

        AsyncStorage.getItem('city').then((result) => {
            this.setState({name: result})

            if(this.props.route.params.id == 'today') {
                this.getData(result)
            } else {
                this.setState({data: this.props.route.params.data})
            }

        }) 
        
    }

    renderDate() {

        if(this.state.data.id) {

            var date = new Date()

            return date.toLocaleDateString('ru')

        } else {

            return this.state.data.dt_txt

        }

    }

    renderTime(dateUTC) {
        let date = new Date(dateUTC * 1000)
        let formatted = moment(date).format('HH:MM')

        return formatted
    }

    handleBackButton() {
        if(this.state.data.id == 'today') {
            this.props.navigation.reset({
                index: 0, 
                routes: [{name: 'Main'}]
            })
        } else {
            this.props.navigation.goBack()
        }
    }

    renderName(name) {
        
        return this.state.name
    }

    renderSunTime() {
        if(this.state.data.sys.sunrise) {

            return (
                <View style={styles.sunMainView}>

                    <View style={styles.sunView}>

                        <Image 
                            style={styles.sunIcon}
                            source={require('../../../assets/images/sunrise.png')}
                        />

                        <Text style={styles.sunText}>
                            {this.renderTime(this.state.data.sys.sunrise)}
                        </Text>

                    </View>

                    <View style={styles.sunView}>

                        <Image 
                            style={styles.sunIcon}
                            source={require('../../../assets/images/sunset.png')}
                        />

                        <Text style={styles.sunText}>
                            {this.renderTime(this.state.data.sys.sunset)}
                        </Text>

                    </View>

                </View>
            )

        } else {
            return null
        }
    }

    render() {
        if(this.state.data == null) {
            return null
        } else {
            return (
                <SafeAreaView style={styles.container}>

                    <ScrollView style={{flex: 1}}>

                    <View style={styles.header}>

                        <TouchableOpacity style={styles.backButton} onPress={() => this.handleBackButton()}>

                            <Image 
                                style={styles.backIcon}
                                source={require('../../../assets/images/backIcon.png')}
                            />

                        </TouchableOpacity>

                        <View>

                            <Text style={styles.headerText}>
                                {this.renderName(this.state.data.name)}
                            </Text>

                            <Text style={styles.dateText}>

                                {this.renderDate()}

                            </Text>

                        </View>

                    </View>

                    <View style={styles.mainData}>

                        <View style={styles.weatherIconView}>

                            <Image 
                                style={styles.weatherIcon}
                                source={{uri: `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`}}
                            />

                            <Text style={styles.weatherText}>
                                {this.state.data.weather[0].description}
                            </Text>

                        </View>

                        <View style={styles.weatherTextView}>

                            <View style={styles.weatherTextCategory}>

                                <Image 
                                    style={styles.weatherTextCategoryIcon}
                                    source={require('../../../assets/images/tempIcon.png')}
                                />

                                <Text style={styles.weatherTextCategoryText}>
                                    {this.state.data.main.temp}°C
                                </Text>

                            </View>

                            <View style={styles.weatherTextCategory}>

                                <Image 
                                    style={styles.weatherTextCategoryIcon}
                                    source={require('../../../assets/images/humidity.png')}
                                />

                                <Text style={styles.weatherTextCategoryText}>
                                    {this.state.data.main.humidity}%
                                </Text>

                            </View>

                            <View style={styles.weatherTextCategory}>

                                <Image 
                                    style={styles.weatherTextCategoryIcon}
                                    source={require('../../../assets/images/wind.png')}
                                />

                                <Text style={styles.weatherTextCategoryText}>
                                    {this.state.data.wind.speed} meter/sec
                                </Text>

                            </View>
            
                        </View>
                    
                    </View> 

                    <View style={styles.externalData}>

                        <View style={styles.firstData}>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Feels like
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.feels_like}°C
                                </Text>

                            </View>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Sea level
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.sea_level} hPa
                                </Text>

                            </View>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Max temp.
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.temp_max}°C
                                </Text>

                            </View>

                        </View>

                        <View style={styles.firstData}>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Pressure
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.pressure} hPa
                                </Text>

                            </View>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Ground level
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.grnd_level} hPa
                                </Text>

                            </View>

                            <View style={styles.firstDataCategory}>

                                <Text style={styles.firstDataText}>
                                    Min temp.
                                </Text>

                                <Text style={styles.firstDataText}>
                                    {this.state.data.main.temp_min}°C
                                </Text>

                            </View>

                        </View>

                    </View>

                    {this.renderSunTime()}

                    <View style={styles.cloudView}>

                        <View style={{

                        }}>

                            <Image 
                                style={styles.cloudIcon}
                                source={require('../../../assets/images/cloud.png')}
                            />

                            <Text style={{
                                color: 'black'
                            }}>
                                (Cloudiness)
                            </Text>

                        </View>

                        <Text style={{
                            color: 'black',
                            fontSize: 30,
                        }}>
                            {this.state.data.clouds.all}%
                        </Text>

                    </View>

                    </ScrollView>

                </SafeAreaView>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
    }, 
    header: {
        // flex: 1, 
        width: width * 0.9,
        flexDirection: 'row', 
        alignSelf: 'center', 
        justifyContent: 'space-between', 
        marginTop: 15, 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey'
    }, 
    headerText: {
        fontWeight: '600', 
        fontSize: 20, 
        color: 'black', 
        alignSelf: 'center'
    }, 
    dateText: {
        color: 'grey'
    },
    backButton: {
        height: 40, 
        width: 40, 
    }, 
    backIcon: {
        height: 35, 
        width: 35
    }, 
    mainData: {
        marginTop: 10,
        flexDirection: 'row', 
        // borderBottomColor: 'grey', 
        // borderBottomWidth: 1,
        width: width * 0.9,
        alignSelf: 'center',
        paddingBottom: 10,
    }, 
    weatherTextView: {
        flex: 1,
    }, 
    weatherTextCategory: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    weatherTextCategoryIcon: {
        height: 30,
        width: 30,
    }, 
    weatherTextCategoryText: {
        fontSize: 20,
        marginLeft: 10,
        color: 'black'
    },
    weatherText: {
        alignSelf: 'center', 
        fontSize: 35,
        color: 'black'
    },
    weatherIconView: {
        flex: 1,
    }, 
    weatherIcon: {
       height: 100, 
       width: 100, 
       alignSelf: 'center', 
    },
    weatherTempView: {
        flex: 1,
        justifyContent: 'center',
    },
    weatherTemp: {
        alignSelf: 'center', 
        fontSize: 40, 
        color: 'black'
    },
    externalData: {
        width: width * 0.9, 
        alignSelf: 'center', 
        flexDirection: 'row', 
        marginTop: 20,
    }, 
    firstData: {
        flex: 1,
    },
    firstDataCategory: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '90%', 
        borderTopColor: 'grey', 
        alignSelf: 'center', 
        borderTopWidth: 1,
        paddingTop: 5,
        marginBottom: 15,
    }, 
    firstDataText: {
        color: 'black',
        fontSize: 17, 
    },
    sunMainView: {
        flexDirection: 'row',
        marginTop: 20,
    }, 
    sunView: {
        flex: 1,
        alignItems: 'center'
    }, 
    sunIcon: {
        width: 100,
        height: 100,
    },
    sunText: {
        marginTop: 10,
        color: 'black',
        fontSize: 18
    },
    cloudView: {
        flexDirection: 'row',
        width: width * 0.8, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderTopColor: 'grey', 
        borderTopWidth: 1,
    }, 
    cloudIcon: {
        height: 60,
        width: 60,
        alignSelf: 'center',
    }
})
