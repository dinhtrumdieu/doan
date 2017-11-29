import React, {Component} from "react";
import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import FetchImage from "../common/FetchImage";

 class MenuItemCooker extends Component {

    constructor(props) {
        super(props);
    }

    renderStar = (key) => (
        <Image key={key} style={{height: 13, width: 13}}
               resizeMode="contain"
               source={require('../../../res/img/star.png')}/>
    );

    renderCooker = (name,image) => (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.navigateDetail}>
                <FetchImage style={{borderRadius: 50, width: 100, height: 100}} uri={image}/>
            </TouchableOpacity>
            <Text style={{color: "#083A0E"}}> {name}</Text>
        </View>
    );

    tinhStar = () => {
        let rowStar = [];
        for (i = 0; i < 3; i++) {
            rowStar.push(this.renderStar(i))
        }
        return rowStar
    };

    navigateDetail = ()=>{
        const {item} = this.props;
        this.props.navigateToPage('DetailCooker',{item})
    };

    render() {
        let {item} = this.props;
        let image = item && item.hinhanh;
        let name =  item && item.fullname;
        return (
            <View style={{flex: 1, alignItems: "center", marginTop: 25}}>
                {this.renderCooker(name,image)}
                <View  style={{flexDirection: "row"}}>
                    {this.tinhStar()}
                </View>
            </View>
        )
    }
}

export default connect(null,{navigateToPage})(MenuItemCooker);

