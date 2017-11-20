import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View, Share, ImageBackground} from 'react-native';
import ToolBar from "../common/ToolBar";
import {APP_BACKGROUND, APP_COLOR} from "../../../res/style/AppStyle";
import MenuItem from "../common/MenuItem";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import {checkLogin} from "../../redux/login/LoginAction";

class YouComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 0, name: "Thông tin", image: require('../../../res/img/ic_home.png')},
                {id: 1, name: "Lịch sử đặt hàng", image: require('../../../res/img/ic_pikalong.png')},
                {id: 2, name: "Tạo món", image: require('../../../res/img/boy.png')},
                {id: 3, name: "Món ăn của tôi", image: require('../../../res/img/ic_pikalong.png')},
                {id: 4, name: "Món ăn ưa thích", image: require('../../../res/img/ic_pikalong.png')},
                {id: 5, name: "Đơn đặt hàng", image: require('../../../res/img/ic_pikalong.png')},
                {id: 6, name: "Cài đặt", image: require('../../../res/img/ic_pikalong.png')},
                {id: 7, name: "Góp ý", image: require('../../../res/img/ic_pikalong.png')},
            ],
        }
    }

    handleItemClick = (id) => {
        let {navigateToPage} = this.props;
        switch (id) {
            case 0:
                break;
            case 1:
                this.props.checkLogin(()=>{
                    navigateToPage('OrderHistory')
                });
                break;
            case 2:
                navigateToPage('CreateFood');
                break;
            case 3:
                break;
            case 4:
                navigateToPage('GetRequest');
                break;
            case 5:
                navigateToPage('CoinHistory');
                break;
            case 6:
                break;
        }
    };
    renderItem = ({item}) => {
        return <MenuItem
            item={item}
            onItemClick={() => this.handleItemClick(item.id)}
        />
    };

    keyExtractor = (item) => item.id;

    renderHeader = () => (
        <ImageBackground source={require('../../../res/img/bg_cookerfood.jpg')} style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                height: 150,
                backgroundColor: '#d4d4d4',
                opacity: 0.3,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 25, position: 'absolute',}}>
                <TouchableOpacity onPress={() => {
                    this.props.navigateToPage('InforYou')
                }}>
                    <Image style={{width: 80, height: 80, borderRadius: 40, marginTop: 15, marginLeft: 100}}
                           source={require('../../../res/img/bg_app.jpg')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 17, marginVertical: 15, marginLeft: 100, color: "#ffffff"}}>Nguyễn Trung
                    Định</Text>
            </View>
        </ImageBackground>
    );

    renderList = () => (
        <FlatList
            style={styles.ViewFlatList}
            numColumns={3}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
        />
    );

    render() {
        return (
            <View style={styles.Container}>
                {this.renderHeader()}
                {this.renderList()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#D0D0D0'
    },
    TopBgImage: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        position: 'absolute',
        bottom: 0,
    },
    ViewFlatList: {
        paddingLeft: 8,
        marginTop: 30,
        alignSelf: 'center'
    },
    IconSetting: {
        height: 22,
        width: 23,
        marginLeft: 8,
        tintColor: APP_COLOR,
    },
    IconShare: {
        height: 22,
        width: 20,
    }
});

export default connect(null, {navigateToPage,checkLogin})(YouComponent);
