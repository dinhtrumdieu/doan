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
import CartIcon from "../common/CartIcon";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {actionGetList} from "../../redux/home/HomeAction";

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.props.actionGetList();
        this.state = {
            data: [
                {_id: 1, name: 'dinh'},
                {_id: 2, name: 'dinh'},
                {_id: 3, name: 'dinh'},
                {_id: 4, name: 'dinh'},
                {_id: 5, name: 'dinh'},
                {_id: 6, name: 'dinh'},
                {_id: 7, name: 'dinh'},
                {_id: 8, name: 'dinh'},
            ],
        }
    }

    _centerToolBar = () => {
        return (
            <TouchableOpacity style={styles.ViewSearch}>
                <Image style={styles.IconSearch} source={require('../../../res/img/search.png')}/>
                <Text style={styles.TextPlaceHolder}>なにをお探しですか</Text>
            </TouchableOpacity>
        )
    };

    _rightToolBar = () => (<CartIcon/>);

    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../res/img/bg_app.jpg')}>
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
                        renderItem={({item}) => <ItemFood/>}/>
                </ScrollView>
            </ImageBackground>
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
