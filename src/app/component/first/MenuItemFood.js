import React, {Component} from "react";
import {Image, View, Dimensions, TouchableOpacity} from "react-native";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import FetchImage from "../common/FetchImage";

class MenuItemFood extends Component {

    renderFood = (item) => (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigateToPage('Detail',{item})}>
                <FetchImage style={{borderRadius: 5, width: Dimensions.get("window").width / 2, height: 100}}
                       uri={item.hinhanh}/>
            </TouchableOpacity>
            <Text style={{color: "#083A0E", fontWeight: "bold"}}> {item.tenmonan}</Text>
            <Text style={{color: "#48A741"}}> {item.gia}</Text>
        </View>
    );

    render() {
        let {item} = this.props;
        return (
            <View style={{flex: 1, alignItems: "center", marginTop: 25}}>
                {this.renderFood(item)}
            </View>
        )
    }
}

export default connect(null , {navigateToPage})(MenuItemFood);
