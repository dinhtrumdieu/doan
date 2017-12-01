import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    Dimensions, ImageBackground, TouchableWithoutFeedback,Keyboard
} from 'react-native';
import AppText from "../common/Text"
import {connect} from "react-redux";
import {actionLogin} from "../../redux/login/LoginAction";
import {goBack} from "../../router/NavigationAction";
import {sizeWidth} from "../../utils/Size";
import {APP_COLOR} from "../../../res/style/AppStyle";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnPress = () => {
        let email = this.state.username;
        let password = this.state.password;
        if (!email || !email.trim()) {
            alert("Yêu cầu nhập email");
        } else if (!password || !password.trim()) {
            alert("Yêu cầu nhập password");
        } else if (!this.validateEmail(email)) {
            alert("Email không đúng định dạng");
        } else {
            this.props.actionLogin(this.state.username, this.state.password);
        }
    };

    validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text);
    };

    _next = (e) => {
        e && e.focus();
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <ImageBackground style={styles.background_image}
                                     source={require("../../../res/img/bg_general.png")}>
                        <AppText style={styles.logo}>MommyCook</AppText>
                        <View style={{margin: 30}}>
                            <View style={styles.text_input}>
                                <Image style={{margin: 10}} source={require("../../../res/img/avatar.png")}/>
                                <TextInput style={{flex: 1, fontSize: 17}} placeholder="username"
                                           placeholderTextColor="#FFFFFF"
                                           underlineColorAndroid="transparent"
                                           ref={'username'}
                                           returnKeyType='next'
                                           onSubmitEditing={() => this._next(this.refs.password)}
                                           onChangeText={(username) => this.setState({username})}/>
                            </View>
                            <View style={styles.text_input}>
                                <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                                <TextInput style={{flex: 1, fontSize: 17}} placeholder="password"
                                           placeholderTextColor="#FFFFFF"
                                           underlineColorAndroid="transparent"
                                           secureTextEntry={true}
                                           ref={'password'}
                                           returnKeyType='send'
                                           onSubmitEditing={this.handleOnPress}
                                           onChangeText={(password) => this.setState({password})}
                                />
                            </View>
                            <TouchableOpacity onPress={this.handleOnPress}>
                                <AppText style={styles.login}>Login</AppText>
                            </TouchableOpacity>
                            <View style={styles.bottom}>
                                <Text style={styles.register} onPress={() => {
                                    this.props.navigation.navigate("register")
                                }}>Register
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={{padding: sizeWidth(2.13), position: 'absolute'}}
                                      onPress={this.props.goBack}>
                        <Image style={{width: sizeWidth(6.4), height: sizeWidth(5), tintColor: APP_COLOR}}
                               resizeMode='contain'
                               source={require('../../../res/img/ic_back_white.png')}/>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background_image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "center"
    },
    logo: {
        textAlign: "center",
        color: "#0B0B0B",
        fontSize: 35,
        fontWeight: "bold"
    },
    text_input: {
        marginTop: 10,
        flexDirection: "row",
        height: 45,
        borderRadius: 5,
        backgroundColor: "#48A741",
        marginBottom: 5,
    },
    login: {
        marginTop: 30,
        backgroundColor: "#126922",
        color: "#FFFFFF",
        height: 50,
        fontSize: 20,
        borderRadius: 5,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold"
    },
    bottom: {
        marginTop:40,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    forget: {
        fontFamily: "sans-serif",
        color: "#126922",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 17,
    },
    register: {
        fontWeight: "bold",
        fontSize: 17,
        marginLeft: 10,
        color: 'blue',
        textDecorationLine: "underline"
    }
});

export default connect(null, {actionLogin, goBack})(Login);
