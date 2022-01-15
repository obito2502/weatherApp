import Toast from "react-native-root-toast"
import AsyncStorage from "@react-native-async-storage/async-storage"

function getWeatherForDay(name) {

    return new Promise(function (resolve, reject) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d7b00e3b1c8cc224e73f52f2cf64a792`, {
            method: 'GET', 
            headers: {}
        }).then(response => response.json()).
        then(responseJson => {
            
            resolve(responseJson)

        }).
        catch((error) => {
            Toast.show('Проверьте введенные данные', {
                duration: Toast.durations.SHORT, 
                position: Toast.positions.CENTER
            })

            reject(error)
        })

    })

    
}

export default getWeatherForDay