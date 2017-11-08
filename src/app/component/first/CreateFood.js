import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TextInput, Dimensions, TouchableOpacity} from "react-native";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {Dropdown} from 'react-native-material-dropdown';
import ImagePicker from "react-native-image-picker";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {sizeWidth} from "../../utils/Size";
import {uploadImage} from "../../api/Api";

export default class CreateFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            imageUri: null,
            path: ''
        }
    }

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = (name) => (
        <Text style={TOOL_BAR_TEXT}>{name}</Text>
    );

    showImagePicker = () => {
        const options = {
            title: 'Select Image',
            noData: true,
            mediaType: 'photo',
            quality: 0.5,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const imageUri = {uri: response.uri};
                this.setState({
                    imageUri,
                    path: response.uri,
                })
            }
        });
    };

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
                <ToolBar
                    center={this.renderCenterToolBar("Create Food")}/>
                <View style={{alignItems: "center", flex: 1}}>
                    <View style={[styles.image, {flex: 1, width: Dimensions.get("window").width}]}>
                        {
                            this.state.imageUri ?
                                <Image style={{width: "100%", height: "100%"}} source={this.state.imageUri}/> :
                                <Image style={{flex: 1}} source={require("../../../res/img/pho.jpg")}/>
                            // this.state.imageUri !== undefined ?
                            // <Image style={{flex: 1}} source={this.state.imageUri}/> :
                            // <Image style={{flex: 1}} source={require("../../../res/img/ic_food.png")}/>
                        }
                    </View>

                    <View style={[styles.image, {
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#b300b3",
                        position: "absolute"
                    }]}>
                        <TouchableOpacity onPress={() => {
                            this.showImagePicker()
                        }}>
                            <Image source={require("../../../res/img/ic_camera.png")}/>
                        </TouchableOpacity>
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

                        <TextInput style={{borderColor: "#99994d", borderWidth: 1, borderRadius: 5, marginTop: 10}}
                                   placeholder=" description..."
                                   underlineColorAndroid="transparent"/>

                        <View style={{marginVertical: 5, flexDirection: "row", justifyContent: "center"}}>
                            <Dropdown
                                containerStyle={{width: 100, height: 70}}
                                label='category'
                                baseColor="#111109"
                                textColor="#75753e"
                                data={data}
                            />
                            <TextInput style={styles.price}
                                       multiline={true}

                                       maxLength={7}
                                       placeholder=" price..."
                                       underlineColorAndroid="transparent"/>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.onClick(this.state.path)
                        }}>
                            <Text style={styles.create}> Create </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    onClick = (path) => {
        alert(path);
        uploadImage(path);
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
    price: {
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
    },
    PickedImage: {
        width: sizeWidth(40),
        height: sizeWidth(26.7),
        alignSelf: 'center',
        marginBottom: sizeWidth(4)
    },

});
