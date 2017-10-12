import React from 'react';
import {TabNavigator} from "react-navigation";
import HomeComponent from "./component/home/HomeComponent";
import CategoryComponent from "./component/category/CategoryComponent";
import YouComponent from "./component/you/YouComponent";
import {Text} from "react-native";

export const MainTabRouter = TabNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            tabBarLabel: ({focused}) => (
                focused ? <Text numberOfLines={1} style={{color: 'green'}}>ホ</Text>
                        : <Text numberOfLines={1} style={{color: 'red'}}>ホ</Text>
            ),
        }
    },
    Category: {
        screen: CategoryComponent,
    },
    You: {
        screen: YouComponent
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions:{
        style:{
            backgroundColor:'blue'
        },
        indicatorStyle:{
            backgroundColor:'red'
        }
    }
});
