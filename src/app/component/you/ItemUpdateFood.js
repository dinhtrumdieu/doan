import React, {Component} from "react";
import {Image, View, Dimensions, TouchableOpacity} from "react-native";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import FetchImage from "../common/FetchImage";
import {fMoney} from "../../utils/MoneyFormat";
import {IMAGE_ADDRESS} from "../../api/Api";

class ItemUpdateFood extends Component {

    renderFood = (item) => {
        const image = item && item.hinhanh && IMAGE_ADDRESS + item.hinhanh;
        return (<View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigateToPage('CreateFood', {item})}>
                <FetchImage style={{borderRadius: 5, width: Dimensions.get("window").width / 2, height: 100}}
                            uri={image}/>
            </TouchableOpacity>
            <Text style={{color: "#083A0E", fontWeight: "bold"}}> {item.tenmonan}</Text>
            <Text style={{color: "#48A741"}}> {fMoney(item.gia)} vnđ</Text>
        </View>);
    };

    render() {
        let {item} = this.props;
        return (
            <View style={{flex: 1, alignItems: "center", marginTop: 25}}>
                {this.renderFood(item)}
            </View>
        )
    }
}

export default connect(null , {navigateToPage})(ItemUpdateFood);
