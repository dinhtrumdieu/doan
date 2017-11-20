import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    Dimensions
} from 'react-native';
import AppText from "../common/Text"
import {connect} from "react-redux";
import {actionLogin} from "../../redux/login/LoginAction";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.background_image} source={require("../../../res/img/bg_general.png")}>

                    <AppText style={styles.logo}>MommyCook</AppText>
                    <View style={{margin: 30}}>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/avatar.png")}/>
                            <TextInput style={{flex: 1, fontSize: 17}} placeholder="username"
                                       placeholderTextColor="#FFFFFF"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(username) => this.setState({username})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                            <TextInput style={{flex: 1, fontSize: 17}} placeholder="password"
                                       placeholderTextColor="#FFFFFF"
                                       underlineColorAndroid="transparent"
                                       secureTextEntry={true}
                                       onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <TouchableOpacity onPress={()=>{this.props.actionLogin(this.state.username,this.state.password)}}>
                            <AppText style={styles.login} onPress={() =>
                                console.log(this.state.username)
                            }>Login</AppText>
                        </TouchableOpacity>
                        <View style={styles.bottom}>
                            <AppText style={styles.forget}>Forgot_password</AppText>
                            <Text style={styles.register} onPress={() => {
                                this.props.navigation.navigate("register")
                            }}>Register
                            </Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
        margin: 10,
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
        textDecorationLine: "underline"
    }
});

export default connect(null,{actionLogin})(Login);
