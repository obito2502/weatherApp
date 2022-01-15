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

import WeatherComponent from "../../components/WeatherComponent";
import getFutureWeather from "../../helpers/GetFutureWeather";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class NextDaysScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }

    }

    async getData(name) {
        var result = await getFutureWeather(name)

        this.setState({data: result})
    }

    componentDidMount() {
        AsyncStorage.getItem('city').then((result) => {
            this.getData(result)
        })
    }

    render() {
        if(this.state.data == null) {
            return null
        } else {
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
