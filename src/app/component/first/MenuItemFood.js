import React, {Component} from "react";
import {Image, View, Dimensions, TouchableOpacity} from "react-native";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";

class MenuItemFood extends Component {

    renderFood = (item) => (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigateToPage('Detail',{item})}>
                <Image style={{borderRadius: 5, width: Dimensions.get("window").width / 2, height: 100}}
                       source={item.images}/>
            </TouchableOpacity>
            <Text style={{color: "#083A0E", fontWeight: "bold"}}> {item.name}</Text>
            <Text style={{color: "#48A741"}}> {item.price}</Text>
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
