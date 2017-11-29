import React, {Component} from 'react';
import {
    FlatList, ImageBackground, ScrollView,
    Text, StyleSheet,
    View, TouchableOpacity, Image
} from 'react-native';
import ToolBar from "../common/ToolBar";
import ItemFood from "../common/ItemFood";
import {sizeHeight, sizeWidth} from "../../utils/Size";
import CartIcon from "../common/CartIcon";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {Food} from "../../model/Food";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import BackIcon from "../common/BackIcon";
import {actionGetListItemCategory} from "../../redux/category/CategoryAction";

const preview = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức.' +
    ' Từng miếng bánh vàng ươm, bóng bẩy trông cực kì bắt mắt';

class ListCategory extends Component {

    constructor(props) {
        super(props);
        const {item} = this.props.navigation.state.params;
        let id = item && item.id;
        this.props.actionGetListItemCategory(id);
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

    _leftToolBar = ()=>{
      return(
          <BackIcon/>
      )
    };

    _centerToolBar = () => {
        const {item} = this.props.navigation.state.params;
        let name = item && item.name;
        return (
            <Text style={TOOL_BAR_TEXT}>CÁC LOẠI {name}</Text>
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
                    left={this._leftToolBar()}
                    center={this._centerToolBar()}
                    right={this._rightToolBar()}
                />
                <ScrollView>
                    <FlatList
                        data={this.props.listItemCategory}
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

function mapState(state) {
    return {
        listItemCategory: state.categoryState.listItemCategory,
    }
}

export default connect(mapState, {navigateToPage,actionGetListItemCategory})(ListCategory);
