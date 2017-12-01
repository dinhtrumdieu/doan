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

class OrderHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 0),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 1),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 2),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 2),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 1),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 0),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 2),
                new Order(1, "Feb 16,2017", "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM", require("../../../res/img/pho.jpg"), 1),
            ],

        }
    }

    componentWillMount() {
        const user = this.props.user;
        this.props.actionGetListOrderHistory(user.id);
    }

    renderStatus = (status) => {
        if (status === 1) {
            return (
                <AppText style={{color: "green", fontWeight: "bold", fontSize: 16, marginLeft: 5}}>Đã xác nhận</AppText>
            );
        }else if(status === 2){
            return (
                <AppText style={{color: "red", fontWeight: "bold", fontSize: 16, marginLeft: 5}}>Đã từ chối</AppText>
            );
        }else{
            return (
                <AppText style={{color: "blue", fontWeight: "bold", fontSize: 16, marginLeft: 5}}>Đang chờ</AppText>
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
        let time = DateTimeUtil.convertDateToStringYYYYmmDDhhMMss(new Date(thoigian));
        return (
            <View style={styles.container}>
                <AppText style={{
                    alignSelf: "flex-end",
                    marginRight: 15,
                    marginTop: 5,
                    color: "red",
                    fontWeight: "bold"
                }}>{time}</AppText>
                <View style={styles.listfood}>
                    <FetchImage style={{borderRadius: 5, width: 30, height: 30}}
                                uri={imageFood}/>
                    <View style={{flexDirection: "row"}}>
                        <AppText
                            style={{
                                flex: 2,
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#47473F"
                            }}>{nameFood}</AppText>
                        <AppText style={{flex: 1, fontSize: 16}}>{soluong}</AppText>
                        <AppText style={{flex: 1, fontSize: 16}}>{gia} vnđ</AppText>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <AppText style={{color: "#A3A3A3", fontWeight: "bold"}}>Tên người nội trợ : </AppText>
                        <AppText>{nameCooker}</AppText>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: 5, marginBottom: 10}}>
                    <AppText style={{color: "#111111", fontSize: 15, marginLeft: 10, marginTop: 5}}>Trạng
                        thái:</AppText>
                    {this.renderStatus(status)}
                </View>
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
    container: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        backgroundColor: "#FFFFFF"
    },
    listfood: {
        marginBottom: 15,
        marginLeft: 10
    }
});

function mapState(state) {
    return {
        listOrderHistory: state.meState.listOrderHistory,
        user: state.meState.user,
    }
}

export default connect(mapState, {actionGetListOrderHistory})(OrderHistory);
