import React, {Component} from 'react';
import {
    Text, TouchableOpacity,
    View
} from 'react-native';
import ToolBar from "../common/ToolBar";
import SwipeComponent from "./SwipeComponent";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {actionGetList} from "../../redux/home/HomeAction";
class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.props.actionGetList();
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ToolBar
                    title='Home'
                />
                <SwipeComponent/>
                <TouchableOpacity onPress={this.onClick}>
                    <Text>CLick</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onClick = ()=>{
        let {navigateToPage} = this.props;
        navigateToPage('Main');
    }
}

export default connect(null,{navigateToPage,actionGetList})(HomeComponent);
