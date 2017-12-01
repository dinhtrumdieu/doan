import React, {Component} from "react";
import {View, StyleSheet, FlatList, TouchableOpacity, Text, Image} from "react-native";
import ToolBar from "../common/ToolBar";
import {Order} from "../../model/Order";
import AppText from "../common/Text";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import FetchImage from "../common/FetchImage";

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
                <View style={styles.listfood}>
                    <Image style={{borderRadius: 5, width: 30, height: 30}}
                           source={item.image}/>
                    <View style={{flexDirection: "row"}}>
                        <AppText
                            style={{
                                flex: 2,
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#47473F"
                            }}>{item.foodname}</AppText>
                        <AppText style={{flex: 1, fontSize: 16}}>{item.quantity}</AppText>
                        <AppText style={{flex: 1, fontSize: 16}}>{item.price}</AppText>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <AppText style={{color: "#A3A3A3", fontWeight: "bold"}}>{item.time} - </AppText>
                        <AppText>{item.cookername}</AppText>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: 5, marginBottom: 10}}>
                    <AppText style={{color: "#111111", fontSize: 15, marginLeft: 10, marginTop: 5}}>Trạng
                        thái:</AppText>
                    <AppText style={{
                        color: "#172E79", fontWeight: "bold", fontSize: 20, marginLeft: 5
                    }}>{item.status}</AppText>
                    <TouchableOpacity style={{flex: 2}}>
                        <AppText style={{
                            borderRadius: 15, width: 30, height: 30, textAlignVertical: "center", textAlign: "center",
                            color: "#FFFFFF", backgroundColor: "#8AF205", marginLeft: 70
                        }}>Xóa</AppText>
                    </TouchableOpacity>
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
