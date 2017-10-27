import React, {Component} from 'react';
import {
    View,
    TextInput, Text,
    TouchableOpacity,
    Image, Dimensions, StyleSheet
} from 'react-native';
import {styles} from "./Login";

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            confirmPassword: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{
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
                            <Text style={styles.login} onPress={() => {
                                this.props.navigation.navigate("mainTabRouter")
                            }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}

const style = StyleSheet.create({
    text_input: {
        flex: 1,
        fontSize: 17,
        color: "#FFFFFF"
    }
})
