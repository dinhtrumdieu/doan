import React, {Component} from 'react';
import {
    View
} from 'react-native';
import AppMain from "./component/common/AppMain";
export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AppMain/>
            </View>
        );
    }
}
