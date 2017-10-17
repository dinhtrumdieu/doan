import React, {Component} from 'react';
import {
    StatusBar,
    View
} from 'react-native';
import {APP_COLOR} from "../../../res/style/AppStyle";
import AppWithNavigationState from "../../router/AppRouter"

export default class AppMain extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={APP_COLOR}
                    barStyle="light-content"
                />
                <AppWithNavigationState/>
            </View>
        );
    }
}
