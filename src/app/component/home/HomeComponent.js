import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import ToolBar from "../common/ToolBar";
import SwipeComponent from "./SwipeComponent";
export default class HomeComponent extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ToolBar
                    title='Home'
                />
                <SwipeComponent/>
            </View>
        );
    }
}
