import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TextInput, Dimensions, TouchableOpacity} from "react-native";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {Dropdown} from 'react-native-material-dropdown';
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

export default class CreateFood extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = (name) => (
        <Text style={TOOL_BAR_TEXT}>{name}</Text>
    );

    render() {
        let data = [{
            value: 'chicken',
        }, {
            value: 'fish',
        }, {
            value: 'pig',
        }];

        return (
            <View style={styles.container}>
                <ToolBar center={this.renderCenterToolBar("Create Food")}/>
                <View style={{alignItems: "center", flex: 1}}>
                    <View style={[styles.image, {flex: 1, width: Dimensions.get("window").width}]}>
                        <Image style={{flex: 1}} source={require("../../../res/img/pho.jpg")}/>
                    </View>
                    <View style={[styles.image, {
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#b300b3",
                        position: "absolute"
                    }]}>
                        <Image source={require("../../../res/img/ic_camera.png")}/>
                    </View>
                    <View style={{
                        flex: 1,
                        width: Dimensions.get("window").width,
                        marginVertical: 30, paddingHorizontal: 30
                    }}>
                        <TextInput style={{borderColor: "#99994d", borderWidth: 1, borderRadius: 5}}
                                   placeholder=" food name"
                                   maxLength={40}
                                   underlineColorAndroid="transparent"/>
                        <View style={{marginVertical: 5, flexDirection: "row", justifyContent: "center"}}>
                            <Dropdown
                                containerStyle={{width: 100, height: 70}}
                                label='category'
                                baseColor="#111109"
                                textColor="#75753e"
                                data={data}
                            />
                            <TextInput style={styles.description}
                                       multiline={true}
                                       maxLength={70}
                                       placeholder="  description..."
                                       underlineColorAndroid="transparent"/>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.create}> Create </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        backgroundColor: "#a79f8b",
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        borderColor: "#99994d",
        borderWidth: 1,
        flex: 1,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 5
    },
    create: {
        borderRadius: 10,
        backgroundColor: "#8AF205",
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        height: 40,
        marginTop: 20
    }

})
