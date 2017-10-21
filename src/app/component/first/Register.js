import React, {Component} from 'react';
import {
    View,
    TextInput, Text,
    TouchableOpacity,
    Image,
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
                <Text style={styles.logo}> Mommy Cook </Text>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <View style={styles.text_input}>
                        <Image style={{margin: 10}} source={require("../../../res/img/avatar.png")}/>
                        <TextInput style={{flex: 1}} placeholder="username"
                                   underlineColorAndroid="transparent"
                                   onChangeText={(username) => this.setState({username})}/>
                    </View>
                    <View style={styles.text_input}>
                        <Image style={{margin: 10}} source={require("../../../res/img/mail.png")}/>
                        <TextInput style={{flex: 1}} placeholder="email" underlineColorAndroid="transparent"
                                   onChangeText={(email) => this.setState({email})}/>
                    </View>
                    <View style={styles.text_input}>
                        <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                        <TextInput style={{flex: 1}} placeholder="password" underlineColorAndroid="transparent"
                                   onChangeText={(password) => this.setState({password})}/>
                    </View>
                    <View style={styles.text_input}>
                        <Image style={{margin: 10}} source={require("../../../res/img/locked.png")}/>
                        <TextInput style={{flex: 1}} placeholder="confirm password" underlineColorAndroid="transparent"
                                   onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.login} onPress={() => {
                            this.props.navigation.navigate("mainTabRouter")
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
