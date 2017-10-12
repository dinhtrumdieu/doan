import React from 'react';
import {TabNavigator} from "react-navigation";
import HomeComponent from "./component/home/HomeComponent";
import CategoryComponent from "./component/category/CategoryComponent";
import YouComponent from "./component/you/YouComponent";
import {StyleSheet} from "react-native";
import BottomTabItem from "./component/common/BottomTabItem";
import {sizeWidth} from "./utils/Size";
import Text from "./component/common/Text";

export const MainTabRouter = TabNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            title: 'ホーム',
            tabBarIcon: ({focused}) => (
                focused
                    ? <BottomTabItem icon={require('../../res/img/ic_home_active.png')}/>
                    : <BottomTabItem icon={require('../../res/img/ic_home.png')}/>
            ),
            tabBarLabel: ({focused}) => (
                <Text numberOfLines={1} style={styles.TabBarLabel}>ホーム</Text>
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

const styles = StyleSheet.create({
    TabBarLabel: {
        marginTop: sizeWidth(2.13),
        color: 'white',
        fontSize: sizeWidth(3.2),
        fontWeight:'bold'
    }
});
