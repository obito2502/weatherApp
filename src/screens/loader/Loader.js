import React from "react";
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
} from 'react-native'

export default class LoaderScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Main')
        }, 1000)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.body}>
                    <Image 
                        style={styles.image}
                        source={require('../../../assets/images/loaderLogo.png')}
                    />

                    <Text style={styles.text}>
                        Weather App
                    </Text>
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
    body: {
        alignSelf: 'center', 
        height: '80%', 
        alignContent: 'center', 
        justifyContent: "center"
    }, 
    image: {
        height: 150, 
        width: 150,
        alignSelf: 'center'
    }, 
    text: {
        fontSize: 35, 
        alignSelf: 'center', 
        fontWeight: '600', 
        color: 'black'
    }
})
