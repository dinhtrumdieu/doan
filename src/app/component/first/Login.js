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

export class Login extends Component {
    constructor(props) {
        super(props)
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
                            <TextInput style={{flex: 1}} placeholder="username"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(username) => this.setState({username})}/>
                        </View>
                        <View style={styles.text_input}>
                            <Image style={{margin: 10}} source={require("../../../res/img/lock.png")}/>
                            <TextInput style={{flex: 1}} placeholder="password"
                                       underlineColorAndroid="transparent"
                                       secureTextEntry={true}
                                       onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <TouchableOpacity>
                            <AppText style={styles.login} onPress={() =>
                                console.log(this.state.username)
                            }>Login</AppText>
                        </TouchableOpacity>
                        <View style={styles.bottom}>
                            <AppText style={styles.forget}>forgot_password</AppText>
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
        justifyContent: "center"
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
        fontSize: 25,
        fontWeight: "bold"
    },
    text_input: {
        marginTop: 10,
        flexDirection: "row",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#DCD8D7",
    },
    login: {
        marginTop: 30,
        backgroundColor: "#8CF100",
        color: "#223209",
        height: 50,
        borderRadius: 30,
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center"
    },
    bottom: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    forget: {
        fontFamily: "sans-serif",
        color: "#ABA9AA",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    register: {
        fontWeight: "bold",
        marginLeft: 10,
        textDecorationLine: "underline"
    }
});
