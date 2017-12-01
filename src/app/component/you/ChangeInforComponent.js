import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity, CheckBox
} from 'react-native';
import ToolBar from "../common/ToolBar";
import Text from "../common/Text";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import FetchImage from "../common/FetchImage";
import {IMAGE_ADDRESS} from "../../api/Api";

class ChangeInforComponent extends Component {
    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Chỉnh sửa thông tin</Text>
    );

    render() {
        const {user} = this.props.navigation.state.params;
        const avatar = user && user.hinhanh && IMAGE_ADDRESS + user.hinhanh;
        const name = user && user.fullname;
        const diachi = user && user.diachi;
        const sodienthoai = user && user.sodienthoai;
        return (
            <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
                <ToolBar left={this.renderLeftToolBar()}
                         center={this.renderCenterToolBar()}/>
                <View style={{flexDirection: 'row', backgroundColor: '#fff', paddingVertical: 15}}>
                    <FetchImage uri={avatar} style={styles.Left}/>
                    <View style={{flex: 1}}>
                        <Text>{name}</Text>
                        <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox/>
                            <Text style={{marginRight: 30}}>Nam</Text>
                            <CheckBox/>
                            <Text>Nữ</Text>
                        </View>
                        <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/>
                        <Text>{diachi}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    width: 150,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    borderRadius: 5,
                    alignSelf: 'center',
                    marginTop: 30
                }}>
                    <Text style={{color: 'white', fontSize: 14}}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Left: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 20,
    },
    Right: {}
});

export default connect(null, {navigateToPage})(ChangeInforComponent);
