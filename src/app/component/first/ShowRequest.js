import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import ToolBar from "../common/ToolBar";
import AppText from "../common/Text";
import {Request} from "../../model/Request";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import BackIcon from "../common/BackIcon";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

class ShowRequest extends Component {
    constructor(props) {
        super(props);
        // const {request} = this.props
    }

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Chi tiết đặt hàng</Text>
    );

    render() {
        return (
            <View style={styles.container}>
                <ToolBar left={this.renderLeft()}
                         center={this.renderCenter()}/>
                <View style={{flex: 1}}>
                    <View style={styles.user}>
                        <Image style={styles.avatar} source={require("../../../res/img/cooker.jpg")}/>
                        <View style={{marginTop: 35}}>
                            <AppText style={{fontSize: 17, fontWeight: "bold", color: "black"}}>Nguyen Van A</AppText>
                            <AppText style={{margin: 5, color: "#A63139"}}>0967222369</AppText>
                            <AppText style={{marginLeft: 5}}>Kiệt 82 Nguyễn Lương Bằng</AppText>
                            <View style={{flexDirection: "row", marginTop: 5}}>
                                <TouchableOpacity>
                                    <AppText style={styles.button}>Đồng ý</AppText>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <AppText style={styles.button}>Từ chối</AppText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <AppText style={{height: 2, backgroundColor: "#B6BEC1"}}/>
                    <View style={{flex: 3}}>
                        <Image style={styles.image} source={require('../../../res/img/pho.jpg')}/>
                        <View style={styles.bottomFood}>
                            <AppText style={styles.foodname}>Phở Hà Nội</AppText>
                            <View style={{flexDirection: "row"}}>
                                <AppText style={{color: "#FFFFFF", marginLeft: 10, marginTop: 5}}>Số lượng : </AppText>
                                <AppText style={styles.quantity}>3</AppText>
                            </View>
                            <View style={{flexDirection: "row", marginLeft: 10}}>
                                <AppText style={{color: "#FFFFFF"}}>Yêu cầu: </AppText>
                                <AppText style={{color: "#FFFFFF"}}> Không cay, ít nước, nhiều hành </AppText>
                            </View>
                        </View>
                    </View>
                    <AppText style={styles.time}>12:03 PM, Oct 20 2017</AppText>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    user: {
        flex: 1,
        flexDirection: "row"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 20
    },
    image: {
        flex: 3,
        width: "100%",
        height: "100%",
    },
    bottomFood: {
        position: "absolute",
        bottom: 0,
        height: 100,
        width: "100%",
        backgroundColor: "#000000",
        opacity: 0.8
    },
    foodname: {
        color: "#FFFFFF",
        fontSize: 25,
        marginLeft: 10,
        fontWeight: "bold"
    },
    quantity: {
        textAlign: "center",
        width: 30,
        height: 30,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        borderRadius: 15,
        textAlignVertical: "center"
    },
    button: {
        width: 100,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        marginLeft: 5,
        textAlign: "center",
        textAlignVertical: "center"
    },
    time: {
        position: "absolute",
        right: 0,
        marginRight: 5
    }
});
export default connect(null, {navigateToPage})(ShowRequest);
