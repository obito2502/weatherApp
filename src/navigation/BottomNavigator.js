import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DayScreen from "../screens/day/Day";
import NextDaysScreen from "../screens/nextDays/NextDays";
import {
    Image, 
    View,
    Text
} from 'react-native'

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator>

            <Tab.Screen 
                name='Day'
                component={DayScreen}

                options={{
                    header: () => {return null},
                    tabBarLabel: () =>{return null},
                    tabBarIcon: ({focused}) => (
                        // <Image 
                        //     style={{
                        //         width: 60,
                        //         height: 25,
                        //     }}
                        //     source={require('../../assets/images/today.png')}
                        // />
                        <Text style={{
                            color: focused ? '#55C9F4' : 'black',
                            fontSize: 18,
                            fontWeight: '600'
                        }}>
                            Today
                        </Text>
                    )
                }}
            />

            <Tab.Screen 
                name='NextDays'
                component={NextDaysScreen}

                options={{
                    header: () => {return null},
                    tabBarLabel: () =>{return null}, 
                    tabBarIcon: ({focused}) => (
                        <Image 
                            style={{
                                tintColor: focused ? '#55C9F4' : 'black',
                                height: 30,
                                resizeMode: 'contain'
                            }}
                            source={require('../../assets/images/future.png')}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )

}

export default Tabs