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
import {actionGetListCategory} from "../../redux/category/CategoryAction";

const preview = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức.' +
    ' Từng miếng bánh vàng ươm, bóng bẩy trông cực kì bắt mắt';
let random = false;
class CategoryComponent extends Component {

    constructor(props) {
        super(props);
        this.props.actionGetListCategory();
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
                <ToolBar center={this.renderCenter()}/>
                <FlatList
                    data={this.props.listCategory}
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

function mapState(state) {
    return {
        listCategory: state.categoryState.listCategory,
    }
}

export default connect(mapState ,{navigateToPage,actionGetListCategory})(CategoryComponent);
