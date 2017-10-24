import React, {Component} from "react";
import {View, StyleSheet, FlatList, Image} from "react-native";
import ToolBar from "../common/ToolBar";
import {Request} from "../../model/Request";
import AppText from "../common/Text";

export default class GetRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                new Request(1, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", "approved"),
                new Request(2, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", "rejected"),
                new Request(3, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", "approved"),
                new Request(4, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", ""),
                new Request(5, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", "rejected"),
                new Request(6, "Nguyễn Văn A", "", "", "../../../res/img/girl.png", "Phở Hà Nội", 2, "120000", "../../../res/img/pho.jpg", "4 giờ trước", ""),
            ]
        }
    }

    static _renderStatus({item}) {
        if (item.status === "approved") {
            return <Image source={require("../../../res/img/checked.png")} style={{position: "absolute", right: 0}}/>
        }
        else  if (item.status === "rejected") {
            return <Image source={require("../../../res/img/error.png")} style={{position: "absolute", right: 0}}/>

        }
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={require("../../../res/img/cooker.jpg")}/>
                <View style={styles.centerItem}>
                    <AppText style={styles.user}>{item.username}</AppText>
                    <View style={styles.food}>
                        <AppText style={styles.order}>Order for >> </AppText>
                        <AppText style={styles.foodname}>{item.foodname}</AppText>
                        <AppText style={styles.quantity}>{item.quantity}</AppText>
                        {GetRequest._renderStatus({item})}
                    </View>
                    <AppText>{item.time}</AppText>
                </View>
                <AppText style={{fontWeight:"bold"}}>X</AppText>
            </View>
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolBar title="Request"/>
                <FlatList
                    style={{marginTop: 20}}
                    data={this.state.data}
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
