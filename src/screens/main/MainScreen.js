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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cities: null,
        }
    }

    componentDidMount() {
        this.getData()

        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.getData()
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    getData() {
        AsyncStorage.getItem('chosen').then((data) => {
            var result = JSON.parse(data)

            if(result.length == 0) {
                this.setState({cities: null})
            } else {
                this.setState({cities: result})
            }
        })
    }

    renderText() {
        if(this.state.cities == null) {
            return (

                <Text style={styles.noCityText}>
                    List is empty. Please, click on search icon to add cities
                </Text>

            )
        } else {
            return (
                
                <FlatList 
                    style={styles.flatlist}
                    data={this.state.cities}
                    renderItem={({item, index}) => <CityComponent name={item} navigation={this.props.navigation} props={this.props}/>}
                />

            )
        }
    }

    renderDate() {
        var date = new Date()

        return date.toLocaleDateString('ru')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>

                    <View>

                        <Text style={styles.headerText}>
                            Main
                        </Text>

                        <Text>
                            {this.renderDate()}
                        </Text>

                    </View>


                    <TouchableOpacity style={styles.search} onPress={() => this.props.navigation.navigate('Search')}>

                        <Image 
                            style={styles.searchIcon}
                            source={require('../../../assets/images/searchIcon.png')}
                        />

                    </TouchableOpacity>

                </View>

                <View style={styles.body}>

                    {this.renderText()}

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
        marginTop: 10
    }, 
    headerText: {
        fontWeight: '600', 
        fontSize: 30, 
        color: 'black', 
        alignSelf: 'center'
    }, 
    search: {
        height: 45, 
        width: 45,
        alignSelf: 'center', 
        justifyContent: 'center',
    }, 
    searchIcon: {
        height: 35, 
        width: 35,
        alignSelf: 'center',
    }, 
    body: {
        flex: 15, 
    }, 
    noCityText: {
        alignSelf: 'center', 
        textAlignVertical: 'center',
        textAlign: 'justify', 
        marginTop: 200, 
        fontSize: 25, 
        fontWeight: '600', 
        color: 'black', 
        width: '80%'
    }, 
    flatlist: {
        marginTop: 20,
        
    }
})
