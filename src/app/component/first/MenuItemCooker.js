import React, {Component} from "react";
import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

 class MenuItemCooker extends Component {

    constructor(props) {
        super(props);
        let {item} = this.props;
        this.state = {
            imageCooker: item.image,
            star: item.star,
            nameCooker: item.name,
        }
    }

    renderStar = (key) => (
        <Image key={key} style={{height: 13, width: 13}}
               resizeMode="contain"
               source={require('../../../res/img/star.png')}/>
    );

    renderCooker = () => (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.navigateDetail}>
                <Image style={{borderRadius: 50, width: 100, height: 100}} source={this.state.imageCooker}/>
            </TouchableOpacity>
            <Text style={{color: "#083A0E"}}> {this.state.nameCooker}</Text>
        </View>
    );

    tinhStar = () => {
        let rowStar = [];
        for (i = 0; i < this.state.star; i++) {
            rowStar.push(this.renderStar(i))
        }
        return rowStar
    };

    navigateDetail = ()=>{
        this.props.navigateToPage('DetailCooker')
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", marginTop: 25}}>
                {this.renderCooker()}
                <View  style={{flexDirection: "row"}}>
                    {this.tinhStar()}
                </View>
            </View>
        )
    }
}

export default connect(null,{navigateToPage})(MenuItemCooker);

