import React, {Component} from "react";
import {View, StyleSheet, FlatList, Image, Text, TouchableOpacity} from "react-native";
import {Food} from "../../model/Food";
import ToolBar from "../common/ToolBar";
import {Font} from "../../../res/font/Font"

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                new Food(1, 'SoupSoupSoupSoupSoupSoupSoupSoupSoupSoupSoupSoupSoupSoupSoup', "", '15.000', require('../../../res/img/pho.jpg')),
                new Food(2, 'Phở', "", '35.000', require('../../../res/img/food1.jpg')),
                new Food(3, 'Cháo Hành', "", '55.000', require('../../../res/img/goi.jpg')),
                new Food(4, 'Mì tôm', "", '25.000', require('../../../res/img/nuong.jpg')),
                new Food(5, 'Mỡ hành', "", '65.000', require('../../../res/img/food1.jpg')),
                new Food(6, 'Gà rán', "", '75.000', require('../../../res/img/pho.jpg')),
                new Food(7, 'Soup', "", '35.000', require('../../../res/img/nuong.jpg')),
            ],
        }
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.nameFood}>{item.name}</Text>
                    <View style={styles.rightItem}>
                        <Text style={styles.cancelItem}>X</Text>
                        <View style={styles.pickerQuantity}>
                            <Text style={styles.quantity}>-</Text>
                            <Text style={styles.quantity}>1</Text>
                            <Text style={styles.quantity}>+</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.image} source={require("../../../res/img/nuong.jpg")}/>
                <Text style={styles.price}>110.000d</Text>
                <Text style={styles.cooker}> Bà C</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#E3E3E3"}}>
                <ToolBar title="Cart"/>
                <View style={{flex: 3, marginTop: 30}}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => item._id}
                        renderItem={this.renderItem}/>
                </View>
                <View style={{flex: 1, alignItems: "center", marginLeft: 30, marginRight: 30}}>
                    <Text style={styles.total}>130.000d</Text>
                    <TouchableOpacity style={{flex: 2, width: "100%"}}>
                        <Text style={styles.order}>Place Your Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        height: 110,
        justifyContent: "center"
    },
    item: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        height: 90,
    },
    image: {
        borderRadius: 10,
        position: "absolute",
        width: 100,
        height: 110
    },
    nameFood: {
        textAlignVertical:"center",
        marginLeft: 110,
        fontSize: 15,
        paddingRight: 10,
        color: "#2D2D2D",
        fontStyle: "italic",
        flex: 2
    },
    rightItem: {
        flex: 1
    },
    cancelItem: {
        position: "absolute",
        right: 0,
        fontWeight: "bold"
    },
    pickerQuantity: {
        position: "absolute",
        right: 0,
        bottom: 0,
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "#ACACAC",
        borderWidth: 2,
        width: 80,
        marginBottom: 20,
    },
    quantity: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold"
    },
    price: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderRadius: 10,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        width: 80,
        height: 25,
        textAlign: "center",
    },
    order: {
        height: 40,
        borderRadius: 20,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20
    },
    total: {
        flex: 1,
        alignSelf: "flex-end",
        fontWeight: "bold",
        fontSize: 25,
        color: "#494949",
    },
    cooker: {
        position: "absolute",
        bottom: 0,
        marginLeft: 110,
        fontSize:13,
        width:100,
        height:20,
        borderRadius:10,
        borderWidth:1,
        textAlign:"center",
        textAlignVertical:"center",
        backgroundColor:"#EAE5E1"
    }
})