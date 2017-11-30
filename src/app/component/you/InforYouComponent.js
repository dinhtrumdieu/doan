import React, {Component} from 'react';
import {
    View, StyleSheet, ImageBackground, Image, TouchableOpacity,
} from 'react-native';
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import FetchImage from "../common/FetchImage";

class InforYouComponent extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Account</Text>
    );

    render() {
        const {user} = this.props.navigation.state.params;
        const avatar = user && user.hinhanh;
        const name = user && user.fullname;
        const diachi = user && user.diachi;
        const sodienthoai = user && user.sodienthoai;
        return (
            <View style={styles.Container}>
                <ToolBar
                    left={this.renderLeftToolBar()}
                    center={this.renderCenterToolBar()}/>
                <ImageBackground style={styles.ViewTop} source={require('../../../res/img/bg_app.jpg')}>
                    <View style={{flexDirection: 'row'}}>
                        <FetchImage style={{width: 70, height: 70, borderRadius: 35}}
                               uri={avatar}/>
                        <Text style={{fontSize: 18, color: '#000', marginTop: 20, marginLeft: 20}}>{name}</Text>
                    </View>
                </ImageBackground>
                <View style={{marginHorizontal: 20, marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{flex: 2}}>Giới tính :</Text>
                        <Text style={{flex: 4}}>Nam</Text>
                    </View>
                    <View style={{width: '100%', borderWidth: 0.8, borderColor: '#bcbcbc', marginVertical: 10}}/>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{flex: 2}}>Số điện thoại :</Text>
                        <Text style={{flex: 4}}>{sodienthoai}</Text>
                    </View>
                    <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/><View
                    style={{flexDirection: 'row'}}>
                    <Text style={{flex: 2}}>Địa chỉ :</Text>
                    <Text style={{flex: 4}}>{diachi}</Text>
                </View>
                    <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/>
                </View>
                <TouchableOpacity
                    onPress={()=>{this.props.navigateToPage('ChangeInfor')}}
                    style={{
                    width: 200,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    borderRadius: 5,
                    alignSelf: 'center',
                    marginTop: 30
                }}>
                    <Text style={{color: 'white', fontSize: 14}}>Đổi thông tin</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ViewTop: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10,
    }
});

export default connect(null,{navigateToPage})(InforYouComponent);
