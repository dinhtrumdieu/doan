import React, {Component} from 'react';
import {
    View,
    TextInput, Text,
    TouchableOpacity,
    Image, Dimensions, StyleSheet, ImageBackground
} from 'react-native';
import {styles} from "./Login";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {sizeWidth} from "../../utils/Size";
import {connect} from "react-redux";
import {goBack} from "../../router/NavigationAction";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            confirmPassword: ""
        }
    }

    handleRegister = ()=>{

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
                            <TextInput style={style.text_input} placeholder="username"
                                       underlineColorAndroid="transparent"
                                       placeholderTextColor="#FFFFFF"
                                       onChangeText={(username) => this.setState({username})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/mail.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="email"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(email) => this.setState({email})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="password"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(password) => this.setState({password})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}}
                                   source={require("../../../res/img/locked.png")}/>
                            <TextInput style={style.text_input} placeholderTextColor="#FFFFFF"
                                       placeholder="confirm password"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.login} onPress={this.handleRegister}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={{padding: sizeWidth(2.13),position:'absolute'}} onPress={this.props.goBack}>
                    <Image style={{width: sizeWidth(6.4), height: sizeWidth(5),tintColor:APP_COLOR}}
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
})

export default connect(null,{goBack})(Register);
