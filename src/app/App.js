import React, {Component} from 'react';
import {
    View,BackHandler
} from 'react-native';
import AppMain from "./component/common/AppMain";
import {goBack} from "./router/NavigationAction";
import {connect} from "react-redux";

class App extends Component {

    shouldCloseApp = () => {
        return this.props.nav.index === 0;
    };

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if (this.shouldCloseApp()) {
                return false;
            }

            const {loading} = this.props;
            if (!loading) {
                this.props.goBack();
            }
            return true;

        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <AppMain/>
            </View>
        );
    }
}

export default connect(
    state => ({
        nav: state.nav,
    }),
    {goBack}
)(App);
