import React, {Component} from "react";
import {Image, View, Dimensions} from "react-native";
import Text from "../common/Text";

export default class MenuItemFood extends Component {

    constructor(props) {
        super(props);
        let {item} = this.props;
        this.state = {
            imageFood: item.images,
            nameFood: item.name,
            price: item.price
        }
    }

    renderFood = () => (
        <View style={{flex: 1}}>
            <Image style={{borderRadius: 5, width: Dimensions.get("window").width / 2, height: 100}}
                   source={this.state.imageFood}/>
            <Text style={{color: "#083A0E",fontWeight:"bold"}}> {this.state.nameFood}</Text>
            <Text style={{color: "#48A741"}}> {this.state.price}</Text>
        </View>
    )

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", marginTop: 25}}>
                {this.renderFood()}
            </View>
        )
    }
}
