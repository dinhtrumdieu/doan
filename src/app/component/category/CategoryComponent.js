import React, {Component} from 'react';
import {
    FlatList,
    Text,
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import ItemFood from "../common/ItemFood";
import {Food} from "../../model/Food";
import ItemCategoryLeft from "./ItemCategoryLeft";
import ItemCategoryRight from "./ItemCategoryRight";
import ToolBar from "../common/ToolBar";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {getListCategory} from "../../api/Api";

const preview = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức.' +
    ' Từng miếng bánh vàng ươm, bóng bẩy trông cực kì bắt mắt';
let random = false;
class CategoryComponent extends Component {

    constructor(props) {
        super(props);
        //this.props.getListCategory();
        this.state = {
            data: [
                new Food(1, 'Soup', preview, '15.000', require('../../../res/img/pho.jpg')),
                new Food(2, 'Phở', preview, '35.000', require('../../../res/img/food1.jpg')),
                new Food(3, 'Cháo Hành', preview, '55.000', require('../../../res/img/goi.jpg')),
                new Food(4, 'Mì tôm', preview, '25.000', require('../../../res/img/nuong.jpg')),
                new Food(5, 'Mỡ hành', preview, '65.000', require('../../../res/img/food1.jpg')),
                new Food(6, 'Gà rán', preview, '75.000', require('../../../res/img/pho.jpg')),
                new Food(7, 'Soup', preview, '35.000', require('../../../res/img/nuong.jpg')),
            ],
        }
    }

    renderItem = ({item}) => {
        if (random = !random) {
            return <ItemCategoryLeft item={item}/>
        } else {
            return <ItemCategoryRight item={item}/>
        }

    };

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Menu</Text>
    );

    renderRight = () => (
        <TouchableOpacity onPress={()=>this.props.navigateToPage('Search')}>
            <Image style={styles.IconSearch} source={require('../../../res/img/ic_search.png')}/>
        </TouchableOpacity>

    );

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolBar center={this.renderCenter()}
                         right={this.renderRight()}/>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    IconSearch: {
        height: 17,
        width: 17,
    }
});

export default connect(null ,{navigateToPage,getListCategory})(CategoryComponent);
