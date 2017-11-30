import React, {Component} from 'react';
import {
    View, StyleSheet, TextInput, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, FlatList
} from 'react-native';
import BackIcon from "../common/BackIcon";
import ToolBar from "../common/ToolBar";
import {sizeFont, sizeHeight, sizeWidth} from "../../utils/Size";
import Text from "../common/Text";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {SEARCH_HEIGHT} from "../home/HomeComponent";
import {actionGetListSearch} from "../../redux/search/SearchAction";
import ItemFood from "../common/ItemFood";

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    renderItem = ({item}) => {
        return <ItemFood item={item}/>
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.Container}>
                    {this.renderToolBar()}
                    <FlatList
                        data={this.props.listFoodSearch}
                        keyExtractor={(item, index) => item._id}
                        renderItem={this.renderItem}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderLeft = () => (
        <BackIcon/>
    );

    centerToolBar = () => {
        return (
            <View style={styles.ViewSearch}>
                <TouchableOpacity onPress={() => {
                    this.showSearchResult(this.state.keyword)
                }}>
                    <Image style={styles.IconSearch} source={require('../../../res/img/search.png')}/>
                </TouchableOpacity>
                <TextInput style={styles.TextInput}
                           underlineColorAndroid='transparent'
                           placeholder='Search'
                           placeholderTextColor='#979C9C'
                           autoFocus={true}
                           onChangeText={(text) => this.setState({keyword: text})}
                           onSubmitEditing={this._keyboardSearch}
                           returnKeyType='search'/>
            </View>
        )
    };

    renderToolBar = () => (
        <ToolBar
            left={this.renderLeft()}
            center={this.centerToolBar()}
        />
    );

    showSearchResult = (keyword) => {
        Keyboard.dismiss();
        if (keyword.trim() !== '') {
            this.props.actionGetListSearch(keyword);
           // this.props.navigateToPage('SearchResult',{keyword});
        }
    };

    _keyboardSearch = () => {
        this.showSearchResult(this.state.keyword)
    };

    renderButton = (keyword) => {
        return (
            <TouchableOpacity onPress={() => this.showSearchResult(keyword, 1)} style={styles.ViewButton}>
                <Text style={{fontSize: sizeFont(3.73)}}>{keyword}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    IconSearch: {
        width: sizeWidth(3.73),
        height: sizeWidth(3.73),
        marginRight: sizeWidth(2.7),
    },
    ViewContent: {
        paddingHorizontal: sizeWidth(2.7)
    },
    ViewSearch: {
        width: sizeWidth(66.7),
        height: sizeHeight(SEARCH_HEIGHT),
        alignItems: 'center',
        marginLeft: sizeWidth(3.2),
        marginRight: sizeWidth(3.2),
        paddingLeft: sizeWidth(1.33),
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: sizeWidth(1.06),
    },
    ViewButton: {
        borderRadius: sizeWidth(2.13),
        borderWidth: 1,
        padding: sizeWidth(2.67),
        borderColor: '#979797',
        marginRight: sizeWidth(2.67)
    },
    TextPopularSearch: {
        paddingVertical: sizeWidth(2.7)
    },
    TextInput:{
        height: sizeHeight(6.6),
        fontSize: sizeFont(3.2),
        width:sizeWidth(66.7),
        padding:0,
    }
});

function mapState(state) {
    return {
        listFoodSearch: state.searchState.listFoodSearch,
    }
}

export default connect(mapState,
    {navigateToPage,actionGetListSearch}
)(SearchComponent);
