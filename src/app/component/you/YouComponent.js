import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View, Share, ImageBackground} from 'react-native';
import ToolBar from "../common/ToolBar";
import {APP_BACKGROUND, APP_COLOR} from "../../../res/style/AppStyle";
import MenuItem from "../common/MenuItem";
import Text from "../common/Text";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";

class YouComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 0, name: "Thông tin", image: require('../../../res/img/ic_home.png')},
                {id: 1, name: "Menu", image: require('../../../res/img/ic_pikalong.png')},
                {id: 2, name: "Account", image: require('../../../res/img/boy.png')},
                {id: 3, name: "Category", image: require('../../../res/img/ic_pikalong.png')},
                {id: 4, name: "Account", image: require('../../../res/img/ic_pikalong.png')},
                {id: 5, name: "Account", image: require('../../../res/img/ic_pikalong.png')},
                {id: 6, name: "Account", image: require('../../../res/img/ic_pikalong.png')},
                {id: 7, name: "Account", image: require('../../../res/img/ic_pikalong.png')},
            ],
        }
    }

    handleItemClick = (id) => {
        let {navigateToPage} = this.props;
        switch (id) {
            case 0:

                break;
            case 1:
                this.props.checkLogin(() => {
                    navigateToPage('InviteFriend');
                });
                break;
            case 2:
                this.props.checkLogin(() => {
                    navigateToPage('CheckInComponent');
                });
                break;
            case 3:
                this.props.checkLogin(() => {
                    navigateToPage('DiscountTicket');
                });
                break;
            case 4:
                this.props.checkLogin(() => {
                    navigateToPage('AddressBook');
                });
                break;
            case 5:
                navigateToPage('CoinHistory');
                break;
            case 6:
                this.props.checkLogin(() => {
                    navigateToPage('MyReview');
                });
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
        <ImageBackground source={require('../../../res/img/bg_me.png')} style={{alignItems: 'center',
            justifyContent: 'center',}}>
            <View style={{
                height: 150,
                backgroundColor: '#d4d4d4',
                opacity:0.3,
                width:'100%',
                justifyContent:'center',
                alignItems: 'center',
            }}/>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:25,position:'absolute'}}>
                <TouchableOpacity onPress={()=>{this.props.navigateToPage('InforYou')}}>
                    <Image style={{width:80,height:80,borderRadius:40,marginTop:15}} source={require('../../../res/img/bg_app.jpg')}/>
                </TouchableOpacity>
                <Text style={{fontSize:17,marginVertical:15,color:'#000'}}>Nguyễn Trung Định</Text>
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
        flex:1,
        backgroundColor:'#f5f5f5'
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
        alignSelf:'center'
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

export default connect(null,{navigateToPage})(YouComponent);
