import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    Dimensions, 
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import list from './List'
import SearchComponent from "../../components/SearchComponent";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>

                        <Image 
                            style={styles.backIcon}
                            source={require('../../../assets/images/backIcon.png')}
                        />

                    </TouchableOpacity>

                    <Text style={styles.headerText}>
                        Поиск
                    </Text>

                </View>

                <FlatList 
                    data={list}
                    style={styles.flatlist}
                    renderItem={({item, index}) => <SearchComponent name={item}/>}
                />

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
        height: 50,
        width: width * 0.9, 
        alignSelf: 'center',
        justifyContent: 'center', 
        flexDirection: 'row'
    }, 
    headerText: {
        fontWeight: '600', 
        fontSize: 30, 
        color: 'black', 
        alignSelf: 'center'
    }, 
    back: {
        height: 40, 
        width: 40,
        alignSelf: 'center', 
        justifyContent: 'center', 
        left: 0,
        position: 'absolute',
    }, 
    backIcon: {
        height: 35,
        width: 35,
        alignSelf: 'center'
    }, 
    flatlist: {
        marginTop: 10,
    }
})
