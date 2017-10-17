import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View, Share, ImageBackground} from 'react-native';
import ToolBar from "../common/ToolBar";
import {APP_BACKGROUND, APP_COLOR} from "../../../res/style/AppStyle";
import MenuItem from "../common/MenuItem";
import Text from "../common/Text";

export default class YouComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 0, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 1, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 2, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 3, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 4, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 5, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 6, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
                {id: 7, name: "初めての方へ", image: require('../../../res/img/ic_pikalong.png')},
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
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:25}}>
            <Image style={{width:80,height:80,borderRadius:40}} source={require('../../../res/img/images.jpg')}/>
            <Text style={{fontSize:17,marginVertical:15,color:'blue'}}>Nguyễn Trung Định</Text>
        </View>
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
            <ImageBackground style={styles.Container} source={require('../../../res/img/bg_app.jpg')}>
                <ScrollView>
                    {this.renderHeader()}
                    {this.renderList()}
                </ScrollView>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        height:'100%',
        width:'100%',
        alignItems:'center',
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
        flex: 1,
        marginTop: 7
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
