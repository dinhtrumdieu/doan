import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import ToolBar from "../common/ToolBar";
import AppText from "../common/Text";
import {Request} from "../../model/Request";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import BackIcon from "../common/BackIcon";
import {connect} from "react-redux";
import {navigateToPage,goBack} from "../../router/NavigationAction";
import {IMAGE_ADDRESS} from "../../api/Api";
import FetchImage from "../common/FetchImage";
import DateTimeUtil from "../../utils/DateTimeUtil";
import {actionAccept} from "../../redux/order/OrderAction";

class ShowRequest extends Component {
    constructor(props) {
        super(props);
    }

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Chi tiết đặt hàng</Text>
    );

    handleAccept = (id, trangthai) => {
        if(trangthai === 2){
            this.props.actionAccept(id, trangthai);
            this.props.goBack();
        }else{
            this.props.actionAccept(id, trangthai);
        }
    };

    renderStatus = (id)=>{
        const status = this.props.accept;
        if(status === 0){
            return (
                <View style={{flexDirection: "row", marginTop: 5}}>
                    <TouchableOpacity onPress={()=>this.handleAccept(id,1)}>
                        <AppText style={styles.button}>Đồng ý</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleAccept(id,2)}>
                        <AppText style={styles.button}>Từ chối</AppText>
                    </TouchableOpacity>
                </View>
            );
        }else if(status === 1){
            return (
                <View style={{flexDirection: "row", marginTop: 5}}>
                    <Text style={{fontSize:15,color:'red'}}>Đã xác nhận</Text>
                </View>
            );
        }
    };

    render() {
        const {item} = this.props.navigation.state.params;
        const nameKhachHang = item && item.khachhang && item.khachhang.fullname;
        const sodienthoai = item && item.khachhang && item.khachhang.sodienthoai;
        const diachi = item && item.khachhang && item.khachhang.diachi;
        const avatar = item && item.khachhang && IMAGE_ADDRESS + item.khachhang.hinhanh;
        const nameFood = item && item.chitietdonhang[0] && item.chitietdonhang[0].tenmonan;
        const soluong = item && item.chitietdonhang[0] && item.chitietdonhang[0].soluong;
        const mota = item && item.chitietdonhang[0] && item.chitietdonhang[0].mota;
        const imageFood = item && item.chitietdonhang[0] && IMAGE_ADDRESS + item.chitietdonhang[0].hinhanh;
        const thoigian = item && item.thoigian;
        const id = item && item.id;
        let time = DateTimeUtil.convertDateToStringYYYYmmDDhhMMss(new Date(thoigian));
        return (
            <View style={styles.container}>
                <ToolBar left={this.renderLeft()}
                         center={this.renderCenter()}/>
                <View style={{flex: 1}}>
                    <View style={styles.user}>
                        <FetchImage style={styles.avatar} uri={avatar}/>
                        <View style={{marginTop: 35}}>
                            <AppText
                                style={{fontSize: 17, fontWeight: "bold", color: "black"}}>{nameKhachHang}</AppText>
                            <AppText style={{margin: 5, color: "#A63139"}}>{sodienthoai}</AppText>
                            <AppText style={{marginLeft: 5}}>{diachi}</AppText>
                            {this.renderStatus(id)}
                        </View>
                    </View>
                    <AppText style={{height: 2, backgroundColor: "#B6BEC1"}}/>
                    <View style={{flex: 3}}>
                        <FetchImage style={styles.image} uri={imageFood}/>
                        <View style={styles.bottomFood}>
                            <AppText style={styles.foodname}>{nameFood}</AppText>
                            <View style={{flexDirection: "row"}}>
                                <AppText style={{color: "#FFFFFF", marginLeft: 10, marginTop: 5}}>Số lượng : </AppText>
                                <AppText style={styles.quantity}>{soluong}</AppText>
                            </View>
                            <View style={{flexDirection: "row", marginLeft: 10}}>
                                <AppText style={{color: "#FFFFFF"}}>Yêu cầu: </AppText>
                                <AppText style={{color: "#FFFFFF"}}> {mota}</AppText>
                            </View>
                        </View>
                    </View>
                    <AppText style={styles.time}>{time}</AppText>
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

function mapState(state) {
    return {
        accept: state.orderState.accept,
    }
}

export default connect(mapState, {navigateToPage, actionAccept,goBack})(ShowRequest);
