import React, {Component} from "react";
import {FlatList, View,StyleSheet} from "react-native";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import MenuItemCooker from "./MenuItemCooker";
import {Cooker} from "../../model/Cooker";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";

export default class Cookers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5),
            ]
        }
    }

    renderLeftToolbar = () => (
        <BackIcon/>
    );

    renderItem = ({item}) => (
        <MenuItemCooker item={item}/>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolBar title='Danh sách bà nội trợ'/>
                <FlatList
                    data={this.state.data}
                    numColumns={3}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
