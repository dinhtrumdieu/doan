import {addNavigationHelpers, StackNavigator} from "react-navigation";
import React from 'react';
import {MainTabRouter} from "./MainTabRouter";
import {connect} from "react-redux";
import HomeComponent from "../component/home/HomeComponent";

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
    }
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppRouter navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);