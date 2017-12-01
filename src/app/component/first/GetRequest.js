import React, {Component} from "react";
import {View, StyleSheet, FlatList, Image, Text,TouchableOpacity} from "react-native";
import ToolBar from "../common/ToolBar";
import {Request} from "../../model/Request";
import AppText from "../common/Text";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {actionGetListOrder} from "../../redux/order/OrderAction";
import DateTimeUtil from "../../utils/DateTimeUtil";
import {IMAGE_ADDRESS} from "../../api/Api";
import FetchImage from "../common/FetchImage";

class GetRequest extends Component {
    constructor(props) {
        super(props);
        const user = this.props.user;
        this.props.actionGetListOrder(user.id);
    }

    static _renderStatus({item}) {
        if (item.status === "approved") {
            return <Image source={require("../../../res/img/checked.png")} style={{position: "absolute", right: 0}}/>
        }
        else  if (item.status === "rejected") {
            return <Image source={require("../../../res/img/error.png")} style={{position: "absolute", right: 0}}/>

        }
    }

    handleOnPress = (item)=>{
      this.props.navigateToPage('ShowRequest',{item});
    };

    renderItem = ({item}) => {
        const nameKhachHang = item && item.khachhang && item.khachhang.fullname;
        const avatar = item && item.khachhang && IMAGE_ADDRESS+ item.khachhang.hinhanh;
        const nameFood = item && item.chitietdonhang[0] && item.chitietdonhang[0].tenmonan;
        const soluong = item && item.chitietdonhang[0] && item.chitietdonhang[0].soluong;
        const thoigian = item && item.thoigian;
        let time = DateTimeUtil.convertDateToStringYYYYmmDDhhMMss(new Date(thoigian));
        return (
            <TouchableOpacity onPress={()=>this.handleOnPress(item)} style={styles.container}>
                <FetchImage style={styles.avatar} uri={avatar}/>
                <View style={styles.centerItem}>
                    <AppText style={styles.user}>{nameKhachHang}</AppText>
                    <View style={styles.food}>
                        <AppText style={styles.order}>Order for >> </AppText>
                        <AppText style={styles.foodname}>{nameFood}</AppText>
                        <AppText style={styles.quantity}>{soluong}</AppText>
                        <TouchableOpacity>
                            {GetRequest._renderStatus({item})}
                        </TouchableOpacity>
                    </View>
                    <AppText>{time}</AppText>
                </View>
                <AppText style={{fontWeight:"bold"}}>X</AppText>
            </TouchableOpacity>
        )
    };

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>Các yêu cầu đặt hàng</Text>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolBar left={this.renderLeft()}
                         center={this.renderCenter()}/>
                <FlatList
                    style={{marginTop: 20}}
                    data={this.props.listOrder}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 80,
        backgroundColor: "#D3E0E8",
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: "center",
        marginLeft: 10
    },
    centerItem: {
        flex: 3,
        marginLeft: 10
    },
    user: {
        marginTop: 10,
        color: "#1C2127",
        fontSize: 14
    },
    food: {
        flexDirection: "row"
    },
    order: {
        color: "#A63139",
        fontWeight: "bold"
    },
    nameFood: {
        marginLeft: 5,
        fontWeight: "bold",
        color: "#00202F",
    },
    quantity: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: 10
    }
});

function mapState(state) {
    return {
        listOrder: state.orderState.listOrder,
        user: state.meState.user,
    }
}

export default connect(mapState,{navigateToPage,actionGetListOrder})(GetRequest);

