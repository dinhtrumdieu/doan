import React, {Component} from "react";
import {FlatList, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import MenuItemCooker from "./MenuItemCooker";
import {Cooker} from "../../model/Cooker";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";

class Cookers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba1.jpg"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba2.jpg"), 2),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba3.jpg"), 4),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba4.jpg"), 3),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba5.jpg"), 2),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba6.jpg"), 1),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba7.jpg"), 0),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba2.jpg"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba3.jpg"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba6.jpg"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba1.jpg"), 5),
                new Cooker(1, "Nguyen Van A", require("../../../res/img/ba7.jpg"), 5),
            ]
        }
    }

    renderItem = ({item}) => (
        <MenuItemCooker item={item}/>
    );

    renderRight = () => (
        <TouchableOpacity onPress={() => this.props.navigateToPage('Search')}>
            <Image style={styles.IconSearch} source={require('../../../res/img/ic_search.png')}/>
        </TouchableOpacity>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Danh sách bà nội trợ</Text>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolBar center={this.renderCenter()}
                         right={this.renderRight()}/>
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

const styles = StyleSheet.create({
    IconSearch: {
        height: 17,
        width: 17,
    }
});

export default connect(null, {navigateToPage})(Cookers);
