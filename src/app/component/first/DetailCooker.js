import React, {Component} from "react";
import {Image, TouchableOpacity, View, StyleSheet, FlatList, Text} from "react-native";
import ToolBar from "../common/ToolBar";
import AppText from "../common/Text";
import MenuItemFood from "./MenuItemFood";
import {Food} from "../../model/Food";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";

export default class DetailCooker extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Trang cá nhân</Text>
    );

    constructor(props){
        super(props);
        let preview="";
        this.state={
            data: [
                new Food(1, 'Soup', preview, 15000, require('../../../res/img/pho.jpg')),
                new Food(2, 'Phở', preview, 35000, require('../../../res/img/food1.jpg')),
                new Food(3, 'Cháo Hành', preview, 55000, require('../../../res/img/goi.jpg')),
                new Food(4, 'Mì tôm', preview, 25000, require('../../../res/img/nuong.jpg')),
                new Food(5, 'Mỡ hành', preview, 65000, require('../../../res/img/food1.jpg')),
                new Food(6, 'Gà rán', preview, 75000, require('../../../res/img/pho.jpg')),
                new Food(7, 'Soup', preview, 35000, require('../../../res/img/nuong.jpg')),
            ],
        }
    }

    renderItem=({item})=>(
      <MenuItemFood item={item} />
    );

    render() {
        return (
            <View style={styles.container}>
                <ToolBar left={this.renderLeftToolBar()}
                center={this.renderCenterToolBar()}/>
                <View style={styles.user}>
                    <Image style={styles.avatar} source={require("../../../res/img/cooker.jpg")}/>
                    <View style={{marginTop: 35}}>
                        <AppText style={{fontSize: 17, fontWeight: "bold", color: "black"}}>Nguyen Van A</AppText>
                        <AppText style={{margin: 5}}>Kiệt 82 Nguyễn Lương Bằng</AppText>
                        <View style={{flexDirection: "row"}}>
                            <AppText style={{marginLeft: 5, color: "blue"}}>20</AppText>
                            <AppText style={{marginLeft:5,color: "#111111"}}>món ăn</AppText>
                            <AppText style={{color: "blue", marginLeft: 20}}>9</AppText>
                            <AppText style={{marginLeft:5,color: "#111111"}}>quan tâm</AppText>
                        </View>
                        <TouchableOpacity
                            style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
                            <Image resizeMode="contain" style={{height:15,width:15,marginRight:5}}
                                   source={require('../../../res/img/ic_like.png')}/>
                            <AppText>Quan tâm</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={{flex:1}}
                    data={this.state.data}
                    numColumns={2}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    user: {
        height:150,
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
    button: {
        width: 150,
        height: 20,
        fontWeight: "bold",
        borderRadius: 10,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        marginLeft: 5,
        textAlign: "center",
        textAlignVertical: "center"
    },
});