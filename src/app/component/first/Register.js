import React, {Component} from 'react';
import {
    View,
    TextInput, Text,
    TouchableOpacity,
    Image, Dimensions, StyleSheet, ImageBackground, Picker
} from 'react-native';
import {styles} from "./Login";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {sizeWidth} from "../../utils/Size";
import {connect} from "react-redux";
import {goBack} from "../../router/NavigationAction";

const data = [
    {name: "Khách hàng", role: false},
    {name: "Nội trợ", role: true},
];

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            phone: "",
            address: "",
            value: "",
            role:0,
        }
    }

    handleRegister = () => {
        alert(this.state.username + this.state.password + this.state.email+this.state.phone+this.state.address+this.state.role)
    };

    renderPickerItem = (loaimonan) => {
        return (
            <Picker.Item label={loaimonan.name} value={loaimonan.name}/>
        );
    };

    renderItem = () => {
        let listPickerItem = [];
        for (i = 0; i < data.length; i++) {
            listPickerItem.push(this.renderPickerItem(data[i]))
        }
        return listPickerItem
    };

    getID = (itemValue, itemIndex) => {
        this.setState({
            value: itemValue,
        });

        if(itemIndex === 1){
           this.setState({
               role:true
           });
        }else{
            this.setState({
                role:false
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    justifyContent: "flex-start"
                }} source={require("../../../res/img/bg_r.jpg")}>
                    <Text style={{
                        textAlign: "center",
                        color: "#000000",
                        fontSize: 35,
                        marginTop: 20,
                        fontWeight: "bold", marginBottom: 10
                    }}> MOMMY COOK </Text>
                    <View style={{marginLeft: 40, marginRight: 40}}>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/avatar.png")}/>
                            <TextInput style={style.text_input}
                                       placeholder="Tên đầy đủ"
                                       underlineColorAndroid="transparent"
                                       placeholderTextColor="#FFFFFF"
                                       onChangeText={(username) => this.setState({username})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/mail.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="Email"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(email) => this.setState({email})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="Password"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(password) => this.setState({password})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}}
                                   source={require("../../../res/img/locked.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="Số điện thoại"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(phone) => this.setState({phone})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}}
                                   source={require("../../../res/img/locked.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="Địa chỉ"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(address) => this.setState({address})}/>
                        </View>
                        <Picker
                            style={{marginBottom:20}}
                            mode="dropdown"
                            selectedValue={this.state.value}
                            onValueChange={(itemValue, itemIndex) => this.getID(itemValue, itemIndex)}>
                            {this.renderItem()}
                        </Picker>

                        <TouchableOpacity onPress={this.handleRegister}>
                            <Text style={styles.login}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={{padding: sizeWidth(2.13), position: 'absolute'}} onPress={this.props.goBack}>
                    <Image style={{width: sizeWidth(6.4), height: sizeWidth(5), tintColor: APP_COLOR}}
                           resizeMode='contain'
                           source={require('../../../res/img/ic_back_white.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_input: {
        flex: 1,
        fontSize: 17,
        color: "#FFFFFF"
    }
});

export default connect(null, {goBack})(Register);
