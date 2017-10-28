import {addNavigationHelpers, StackNavigator} from "react-navigation";
import React from 'react';
import {MainTabRouter} from "./MainTabRouter";
import {connect} from "react-redux";
import HomeComponent from "../component/home/HomeComponent";
import DetailComponent from "../component/detail/DetailComponent";
import OrderComponent from "../component/order/OrderComponent";
import ListCategory from "../component/category/ListCategory";
import ThankComponent from "../component/order/ThankComponent";
import InforYouComponent from "../component/you/InforYouComponent";
import ChangeInforComponent from "../component/you/ChangeInforComponent";
import CartComponent from "../component/order/CartComponent";
import {Login} from "../component/first/Login";
import {Register} from "../component/first/Register";
import SearchComponent from "../component/search/SearchComponent";

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
    Detail: {
        screen: DetailComponent,
        navigationOptions: {
            header: null
        },
    },
    Order: {
        screen: OrderComponent,
        navigationOptions: {
            header: null
        }
    },
    ListCategory: {
        screen: ListCategory,
        navigationOptions: {
            header: null
        }
    },
    ListCart: {
        screen: CartComponent,
        navigationOptions: {
            header: null
        }
    },
    ThankYou:{
        screen:ThankComponent,
        navigationOptions:{
            header:null
        }
    },
    InforYou:{
        screen:InforYouComponent,
        navigationOptions:{
            header:null
        }
    },
    ChangeInfor:{
        screen:ChangeInforComponent,
        navigationOptions:{
            header:null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    Search:{
        screen: SearchComponent,
        navigationOptions: {
            header: null
        }
    },
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppRouter navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);