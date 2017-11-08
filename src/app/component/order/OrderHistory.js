import React, {Component} from "react";
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from "react-native";
import ToolBar from "../common/ToolBar";
import {OrderItem} from "../../model/OrderItem";
import {Order} from "../../model/Order";
import AppText from "../common/Text";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";

class OrderHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Order(1, "Feb 16,2017", [
                    new OrderItem(1, "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM"),
                    new OrderItem(2, "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM"),
                    new OrderItem(3, "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM"),
                    new OrderItem(4, "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM"),
                    new OrderItem(5, "Phở hà nội", "Nguyễn Văn A", 2, "37.000d", "12:03 AM"),
                ]),
                new Order(2, "Feb 16,2017", [
                    new OrderItem(1, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(2, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(3, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(4, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(5, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                ]),
                new Order(3, "Feb 16,2017", [
                    new OrderItem(1, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(2, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(3, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(4, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                    new OrderItem(5, "Phở hà nội", "Nguyễn Văn A", 2, "237.000d", "12:03 AM"),
                ])
            ],

        }
    }

    renderOrderItem = ({item}) => {
        return (
            <View style={styles.listfood}>
                <View style={{flexDirection: "row"}}>
                    <AppText
                        style={{flex: 2, fontSize: 18, fontWeight: "bold", color: "#47473F"}}>{item.foodname}</AppText>
                    <AppText style={{flex: 1, fontSize: 16}}>{item.quantity}</AppText>
                    <AppText style={{flex: 1, fontSize: 16}}>{item.price}</AppText>
                </View>
                <View style={{flexDirection: "row"}}>
                    <AppText style={{color: "#A3A3A3", fontWeight: "bold"}}>{item.time} - </AppText>
                    <AppText>{item.cookername}</AppText>
                </View>
            </View>
        )
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <AppText style={{
                    alignSelf: "flex-end",
                    marginRight: 15,
                    marginTop: 5,
                    color: "red",
                    fontWeight: "bold"
                }}>{item.day}</AppText>
                <FlatList
                    style={{marginTop: 10}}
                    data={item.orderItem}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderOrderItem}
                />
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 10}}>
                    <TouchableOpacity style={{flex: 2}}>
                        <AppText style={{
                            borderRadius: 15, width: 30, height: 30, textAlignVertical: "center", textAlign: "center",
                            color: "#FFFFFF", backgroundColor: "#8AF205", marginLeft: 20
                        }}>Xóa</AppText>
                    </TouchableOpacity>
                    <AppText style={{flex: 1, textAlign: "right", marginTop: 5,marginRight:10}}> Tổng</AppText>
                    <AppText style={{flex: 1, fontWeight: "bold", color: "#47473F", fontSize: 18}}>539.000d</AppText>
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
                    data={this.state.data}
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

export default connect(null)(OrderHistory);
