import {addNavigationHelpers, StackNavigator} from "react-navigation";
import React from 'react';
import {MainTabRouter} from "./MainTabRouter";
import {connect} from "react-redux";
import HomeComponent from "../component/home/HomeComponent";
import DetailComponent from "../component/detail/DetailComponent";
import OrderComponent from "../component/order/OrderComponent";
import ListCategory from "../component/category/ListCategory";

export const AppRouter = StackNavigator({
    Main: {
        screen: MainTabRouter,
        navigationOptions: {
            header: null
        },
    },
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            header: null
        },
    },
    Detail:{
        screen:DetailComponent,
        navigationOptions: {
            header: null
        },
    },
    Order:{
        screen:OrderComponent,
        navigationOptions:{
            header:null
        }
    },
    ListCategory:{
        screen:ListCategory,
        navigationOptions:{
            header:null
        }
    }
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppRouter navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);