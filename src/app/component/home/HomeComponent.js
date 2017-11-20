import React, {Component} from 'react';
import {
    FlatList, ImageBackground, ScrollView,
    Text, StyleSheet,
    View, TouchableOpacity, Image
} from 'react-native';
import ToolBar from "../common/ToolBar";
import SwipeComponent from "./SwipeComponent";
import ItemFood from "../common/ItemFood";
import {sizeHeight, sizeWidth} from "../../utils/Size";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {actionGetList} from "../../redux/home/HomeAction";
import {Food} from "../../model/Food";
import CartIcon from "../common/CartIcon";
import {Cooker} from "../../model/Cooker";

const preview = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức.' +
    ' Từng miếng bánh vàng ươm, bóng bẩy trông cực kì bắt mắt';

const cooker =  new Cooker(1, "Nguyen Van A", require("../../../res/img/bg_me.png"), 5);

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        // this.props.actionGetList();
        this.state = {
            data: [
                new Food(1, 'Soup', preview, 15000, require('../../../res/img/pho.jpg')),
                new Food(2, 'Phở', preview, 35000, require('../../../res/img/food1.jpg')),
                new Food(3, 'Cháo Hành', preview, 55000, require('../../../res/img/goi.jpg')),
                new Food(4, 'Mì tôm', preview, 25000, require('../../../res/img/nuong.jpg')),
                new Food(5, 'Mỡ hành', preview, 65000, require('../../../res/img/food1.jpg')),
                new Food(6, 'Gà rán', preview, 75000, require('../../../res/img/pho.jpg')),
                new Food(7, 'Soup', preview, 35000, require('../../../res/img/nuong.jpg')),
            ],
        }
    }

    _centerToolBar = () => {
        return (
            <TouchableOpacity
                onPress={()=>{this.props.navigateToPage('Search')}}
                style={styles.ViewSearch}>
                <Image style={styles.IconSearch} source={require('../../../res/img/search.png')}/>
                <Text style={styles.TextPlaceHolder}>Search</Text>
            </TouchableOpacity>
        )
    };

    _rightToolBar = () => (<CartIcon/>);

    renderItem = ({item}) => {
        return <ItemFood item={item}/>
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
                <ToolBar
                    center={this._centerToolBar()}
                    right={this._rightToolBar()}
                />
                <ScrollView>
                    <SwipeComponent/>
                    <FlatList
                        data={this.state.data}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => item._id}
                        renderItem={this.renderItem}/>
                </ScrollView>
            </View>
        );
    }

    onClick = () => {
        let {navigateToPage} = this.props;
        navigateToPage('Main');
    }
}

export const SEARCH_HEIGHT = 4.3;

const styles = StyleSheet.create({

    IconSearch: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        marginRight: 10,
    },
    ViewSearch: {
        width: '100%',
        height: sizeHeight(SEARCH_HEIGHT),
        alignItems: 'center',
        paddingLeft: sizeWidth(1.33),
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: sizeWidth(1.06),
    },
    TextPlaceHolder: {
        color: '#aaa',
    },
});
export default connect(null, {navigateToPage, actionGetList})(HomeComponent);
