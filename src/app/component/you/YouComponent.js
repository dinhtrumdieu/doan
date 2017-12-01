import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View, Share, ImageBackground} from 'react-native';
import ToolBar from "../common/ToolBar";
import {APP_BACKGROUND, APP_COLOR} from "../../../res/style/AppStyle";
import MenuItem from "../common/MenuItem";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import {checkLogin, loginTokenSuccess} from "../../redux/login/LoginAction";
import {getToken, removeToken} from "../../utils/Store";
import YouNotLoginComponent from "./YouNotLoginComponent";
import Cookers from "../cooker/Cookers";
import FetchImage from "../common/FetchImage";
import {actionGetProfile} from "../../redux/you/YouAction";
import {IMAGE_ADDRESS} from "../../api/Api";

class YouComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data1: [
                {id: 0, name: "Thông tin cá nhân", image: require('../../../res/img/information.png')},
                {id: 1, name: "Tạo món", image: require('../../../res/img/cutlery.png')},
                {id: 2, name: "Trang cá nhân", image: require('../../../res/img/settings.png')},
                {id: 3, name: "Món ăn ưa thích", image: require('../../../res/img/ic_list_like.png')},
                {id: 4, name: "Đơn đặt hàng", image: require('../../../res/img/list.png')},
                {id: 5, name: "Món ăn của tôi", image: require('../../../res/img/groceries.png')},
            ],
            data2: [
                {id: 0, name: "Thông tin cá nhân", image: require('../../../res/img/information.png')},
                {id: 1, name: "Lịch sử đặt hàng", image: require('../../../res/img/history.png')},
                {id: 2, name: "Món ăn ưa thích", image: require('../../../res/img/ic_list_like.png')},
            ],
        }
    }

    componentWillMount() {
        getToken().then(data => {
            if (data) {
                this.props.loginTokenSuccess(data);
            }
        }).catch(error => {
        });
    }

    componentDidMount() {
        getToken().then(token => {
            if (token) {
                this.props.actionGetProfile();
            }
        }).catch(error => {
        });
    }

    handleItemClick1 = (id) => {
        let {navigateToPage, user} = this.props;
        switch (id) {
            case 0:
                navigateToPage('InforYou', {user});
                break;
            case 1:
                navigateToPage('CreateFood', {item: null});
                break;
            case 2:
                navigateToPage('DetailCooker', {item: this.props.user});
                break;
            case 3:
                //navigateToPage('GetRequest');
                break;
            case 4:
                navigateToPage('GetRequest');
                break;
            case 5:
                navigateToPage('FoodLikes');
                break;
        }
    };

    handleItemClick = (id) => {
        let {navigateToPage, user} = this.props;
        switch (id) {
            case 0:
                navigateToPage('InforYou', {user});
                break;
            case 1:
                navigateToPage('OrderHistory');
                break;
            case 2:
                break;
        }
    };
    renderItem = ({item}) => {
        return <MenuItem
            item={item}
            onItemClick={() => {
                this.isCheck ? this.handleItemClick1(item.id) : this.handleItemClick(item.id)
            }}
        />
    };

    keyExtractor = (item) => item.id;

    renderHeader = (user) => {
        const avatar = user && user.hinhanh && IMAGE_ADDRESS + user.hinhanh;
        const name = user && user.fullname;
        return (<ImageBackground source={require('../../../res/img/bg_cookerfood.jpg')} style={{
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
                    this.props.checkLogin(() => {
                        this.props.navigateToPage('InforYou', {user})
                    })
                }}>
                    <FetchImage style={{width: 80, height: 80, borderRadius: 40, marginTop: 15, marginLeft: 100}}
                                uri={avatar}/>
                </TouchableOpacity>
                <Text style={{fontSize: 17, marginVertical: 15, marginLeft: 100, color: "#ffffff"}}>{name}</Text>
            </View>
        </ImageBackground>)
    };

    renderList = (isCooker) => {
        const data = isCooker ? this.state.data1 : this.state.data2;
        this.isCheck = isCooker;
        return (
            <FlatList
                style={styles.ViewFlatList}
                numColumns={3}
                data={data}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />)
    };

    logout = () => {
        removeToken();
        this.props.loginTokenSuccess(null);
    };

    render() {
        if (this.props.isLogin) {
            const user = this.props.user;
            const isCooker = user && user.role;
            return (
                <View style={styles.Container}>
                    {this.renderHeader(user)}
                    {this.renderList(isCooker)}
                    <TouchableOpacity onPress={this.logout} style={{
                        paddingLeft: 20,
                        paddingRight: 5,
                        paddingVertical: 6,
                        alignItems: 'flex-end',
                        borderRadius: 5,
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 5,
                        right: 5,
                    }}>
                        <Text style={{color: '#fff'}}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.Container}>
                    {this.renderHeader()}
                    <YouNotLoginComponent/>
                </View>

            );
        }
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
        alignSelf: 'center',
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

function mapState(state) {
    return {
        isLogin: state.loginState.loginToken,
        user: state.meState.user,
    }
}

export default connect(mapState, {navigateToPage, checkLogin, loginTokenSuccess, actionGetProfile})(YouComponent);
