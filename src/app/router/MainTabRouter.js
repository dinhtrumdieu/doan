import React from 'react';
import {TabNavigator} from "react-navigation";
import HomeComponent from "../component/home/HomeComponent";
import YouComponent from "../component/you/YouComponent";
import {StyleSheet} from "react-native";
import DetailComponent from "../component/detail/DetailComponent";
import BottomTabItem from "../component/common/BottomTabItem";
import {sizeWidth} from "../utils/Size";
import Text from "../component/common/Text";
import {APP_COLOR} from "../../res/style/AppStyle";
import CategoryComponent from "../component/category/CategoryComponent";

export const MainTabRouter = TabNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({focused}) => (
                focused
                    ? <BottomTabItem icon={require('../../res/img/ic_home_active.png')}/>
                    : <BottomTabItem icon={require('../../res/img/ic_home.png')}/>
            ),
            tabBarLabel: ({focused}) => (
                <Text numberOfLines={1} style={styles.TabBarLabel}>Home</Text>
            ),
        }
    },
    Category: {
        screen: CategoryComponent,
        navigationOptions: {
            title: 'Menu',
            tabBarIcon: ({focused}) => (
                focused
                    ? <BottomTabItem icon={require('../../res/img/ic_category_active.png')}/>
                    : <BottomTabItem icon={require('../../res/img/ic_category.png')}/>
            ),
            tabBarLabel: ({focused}) => (
                <Text numberOfLines={1} style={styles.TabBarLabel}>Menu</Text>
            ),
        }
    },
    You: {
        screen: YouComponent,
        navigationOptions: {
            title: 'You',
            tabBarIcon: ({focused}) => (
                focused
                    ? <BottomTabItem icon={require('../../res/img/ic_me_active.png')}/>
                    : <BottomTabItem icon={require('../../res/img/ic_me.png')}/>
            ),
            tabBarLabel: ({focused}) => (
                <Text numberOfLines={1} style={styles.TabBarLabel}>You</Text>
            ),
        }
    }
}, {
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    backBehavior: 'none',
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        showIcon: true,
        showLabel: true,
        tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        style: {
            backgroundColor: APP_COLOR,
            height: sizeWidth(17),
            padding: sizeWidth(1.06),
        },
        iconStyle: {
            width: sizeWidth(6.4),
            height: sizeWidth(6.4),
            justifyContent: 'center',
            alignItems: 'center',
        },
        upperCaseLabel: false,
    },
});

const styles = StyleSheet.create({
    TabBarLabel: {
        marginTop: sizeWidth(2.13),
        color: 'white',
        fontSize: sizeWidth(3.2),
        fontWeight: 'bold'
    }
});
