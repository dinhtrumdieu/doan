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
        this.props.actionGetList();
    }

    _centerToolBar = () => {
        return (
            <TouchableOpacity
                onPress={()=>{this.props.navigateToPage('Search')}}
                style={styles.ViewSearch}>
                <Image style={styles.IconSearch} source={require('../../../res/img/search.png')}/>
                <Text style={styles.TextPlaceHolder}>Tìm kiếm</Text>
            </TouchableOpacity>
        )
    };

    renderItem = ({item}) => {
        return <ItemFood key={item.id} item={item}/>
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
                <ToolBar
                    center={this._centerToolBar()}
                />
                <ScrollView>
                    <SwipeComponent/>
                    <FlatList
                        data={this.props.listFood}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => item.id}
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
function mapState(state) {
    return {
        listFood: state.homeState.listFood,
    }
}
export default connect(mapState, {navigateToPage, actionGetList})(HomeComponent);
