import React from "react";
import {} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import LoaderScreen from "../screens/loader/Loader";
import MainScreen from "../screens/main/MainScreen";
import SearchScreen from "../screens/search/Search";
import Tabs from "./BottomNavigator";
import DayScreen from "../screens/day/Day";

const stackNavigator = createStackNavigator()

const screens = [
    {
        name: 'Loader', 
        component: LoaderScreen
    }, 
    {
        name: 'Main', 
        component: MainScreen
    }, 
    {
        name: 'Search', 
        component: SearchScreen
    }, 
    {
        name: 'Tabs', 
        component: Tabs
    }, 
    {
        name: 'FutureDays', 
        component: DayScreen
    }
]

export default function StackNavigator(props) {

    return (
        <stackNavigator.Navigator>

            {screens.map((item, index) => (
                <stackNavigator.Screen 
                    name={item.name}
                    component={item.component}
                    key={index.toString()}

                    options={({ route }) => ({
                        headerTransparent: true,
                        headerTitle: ' ',
                        headerLeft: null,
                    })}
                />
            ))}

        </stackNavigator.Navigator>
    )

}