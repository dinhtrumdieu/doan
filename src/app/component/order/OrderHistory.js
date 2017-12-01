import React, {Component} from "react";
import {View, StyleSheet, FlatList, TouchableOpacity, Text, Image} from "react-native";
import ToolBar from "../common/ToolBar";
import {Order} from "../../model/Order";
import AppText from "../common/Text";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import FetchImage from "../common/FetchImage";
import {actionGetListOrderHistory} from "../../redux/you/YouAction";
import DateTimeUtil from "../../utils/DateTimeUtil";
import {IMAGE_ADDRESS} from "../../api/Api";
import {fMoney} from "../../utils/MoneyFormat";
import {navigateToPage} from "../../router/NavigationAction";

class OrderHistory extends Component {

    componentWillMount() {
        const user = this.props.user;
        this.props.actionGetListOrderHistory(user.id);
    }

    renderStatus = (status) => {
        if (status === 1) {
            return (
                <Text style={{color: "green"}}>Đã xác nhận</Text>
            );
        } else if (status === 2) {
            return (
                <Text style={{color: "red"}}>Đã từ chối</Text>
            );
        } else {
            return (
                <Text style={{color: "blue"}}>Đang chờ</Text>
            );
        }
    };

    renderItem = ({item}) => {
        const nameFood = item && item.chitietdonhang[0] && item.chitietdonhang[0].tenmonan;
        const soluong = item && item.chitietdonhang[0] && item.chitietdonhang[0].soluong;
        const gia = item && item.chitietdonhang[0] && item.chitietdonhang[0].gia;
        const imageFood = item && item.chitietdonhang[0] && IMAGE_ADDRESS + item.chitietdonhang[0].hinhanh;
        const thoigian = item && item.thoigian;
        const status = item && item.trangthai;
        const nameCooker = item && item.noitro && item.noitro.fullname;
        const noitro = item && item.noitro;
        let time = DateTimeUtil.convertDateToStringYYYYmmDDhhMMss(new Date(thoigian));
        return (
            <View style={styles.Container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <AppText style={{color: "#47473F"}}>{nameFood}</AppText>
                    <AppText>{time}</AppText>
                </View>

                <View style={styles.ListFood}>
                    <FetchImage style={{borderRadius: 5, width: 60, height: 60}}
                                uri={imageFood}/>
                    <View>
                        <AppText style={{flex: 1}}>Số lượng : {soluong}</AppText>
                        <AppText>Giá: {fMoney(gia.toString())} vnđ</AppText>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <AppText>Tên người nội trợ : </AppText>
                    <TouchableOpacity onPress={()=>{this.props.navigateToPage('DetailCooker',{item:noitro})}}>
                        <AppText style={{color: 'blue'}}>{nameCooker}</AppText>
                    </TouchableOpacity>
                </View>
                <Text>Trạng thái: {this.renderStatus(status)}</Text>
            </View>
        )
    };

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Lịch sử đặt hàng</Text>
    );

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#E2E2E2"}}>
                <ToolBar
                    left={this.renderLeft()}
                    center={this.renderCenter()}/>
                <FlatList
                    style={{marginTop: 10}}
                    data={this.props.listOrderHistory}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    ListFood: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

function mapState(state) {
    return {
        listOrderHistory: state.meState.listOrderHistory,
        user: state.meState.user,
    }
}

export default connect(mapState, {actionGetListOrderHistory,navigateToPage})(OrderHistory);
