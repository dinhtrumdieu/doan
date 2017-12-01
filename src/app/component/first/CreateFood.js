import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TextInput, Dimensions, TouchableOpacity, Picker} from "react-native";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import ImagePicker from "react-native-image-picker";
import {connect} from "react-redux";
import {navigateToPage, resetPage} from "../../router/NavigationAction";
import {sizeWidth} from "../../utils/Size";
import {createFood, IMAGE_ADDRESS, SERVER_ADDRESS, updateFood, uploadImage} from "../../api/Api";
import {Loaimonan} from "../../model/Loaimonan";
import {NoiTro} from "../../model/NoiTro";
import {actionCreate} from "../../redux/CreateAction";
import {getImage} from "../../utils/Store";
import {fMoney} from "../../utils/MoneyFormat";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

class CreateFood extends Component {
    constructor(props) {
        super(props);
        const {item} = this.props.navigation.state.params;
        const id = item && item.id;
        const name = item && item.tenmonan ? item.tenmonan : "";
        const preview = item && item.chitiet ? item.chitiet : "";
        const price = item && item.gia ? item.gia.toString() : '0';
        const image = item && item.hinhanh && IMAGE_ADDRESS + item.hinhanh || null;

        this.state = {
            id: id,
            content: '',
            imageUri: {uri: image},
            path: '',
            nameFood: name,
            preview: preview,
            price: price,
            category: 'Thể loại',
            index: 0,
            update: false,
        }
    }

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Tạo món ăn</Text>
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
                    update: true,
                });
                this.props.actionCreate(this.state.path);
            }
        });
    };

    renderPickerItem = (loaimonan) => {
        return (
            <Picker.Item label={loaimonan.name} value={loaimonan.name}/>
        );
    };

    renderItemPicker = () => {
        const data = this.props.listCategory;
        let listPickerItem = [];
        if (data) {
            for (i = 0; i < data.length; i++) {
                listPickerItem.push(this.renderPickerItem(data[i]))
            }
        }
        return listPickerItem
    };

    getID = (itemValue, itemIndex) => {
        const data = this.props.listCategory;
        this.setState({
            category: itemValue,
            index: itemIndex
        });
    };

    renderButton = (isUpdate) => {
        if (!isUpdate) {
            return (
                <TouchableOpacity onPress={() => {
                    this.onClick(this.state.id, this.state.nameFood, this.state.preview, this.state.price)
                }}>
                    <Text style={styles.create}> Create </Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => {
                    this.onUpdateFood(this.state.id, this.state.nameFood, this.state.preview, this.state.price)
                }}>
                    <Text style={styles.create}> Update </Text>
                </TouchableOpacity>
            );
        }
    };

    render() {
        const {isUpdate} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <ToolBar
                    left={this.renderLeftToolBar()}
                    center={this.renderCenterToolBar()}/>
                <View style={{alignItems: "center", flex: 1}}>
                    <View style={[styles.image, {flex: 1, width: Dimensions.get("window").width}]}>
                        {
                            this.state.imageUri ?
                                <Image style={{width: "100%", height: "100%"}} source={this.state.imageUri}/> :
                                <Image style={{flex: 1}} source={require("../../../res/img/pho.jpg")}/>
                        }
                    </View>

                    <TouchableOpacity onPress={() => {
                        this.showImagePicker()
                    }} style={[styles.image, {
                        width: 50,
                        height: 50,
                        marginTop: 10,
                        borderRadius: 25,
                        backgroundColor: "#b300b3",
                        position: "absolute",
                        marginBottom: 20
                    }]}>
                        <Image source={require("../../../res/img/ic_camera.png")}/>
                    </TouchableOpacity>
                    <KeyboardAwareScrollView enableOnAndroid={true}>
                        <View style={{
                            flex: 2,
                            width: Dimensions.get("window").width,
                            marginVertical: 20,
                            paddingHorizontal: 30
                        }}>
                            <TextInput style={{
                                borderColor: "#99994d",
                                borderWidth: 1,
                                borderRadius: 5,
                                paddingLeft: 10,
                                paddingVertical: 10
                            }}
                                       placeholder=" food name"
                                       maxLength={40}
                                       value={this.state.nameFood}
                                       onChangeText={(nameFood) => this.setState({nameFood})}
                                       underlineColorAndroid="transparent"/>
                            <View style={{marginVertical: 5, flexDirection: "row", justifyContent: "center"}}>
                                <Picker
                                    style={{width: 150}}
                                    mode="dropdown"
                                    selectedValue={this.state.category}
                                    onValueChange={(itemValue, itemIndex) => this.getID(itemValue, itemIndex)}>
                                    {this.renderItemPicker()}
                                </Picker>
                                <TextInput style={styles.price}
                                           multiline={true}
                                           maxLength={7}
                                           value={this.state.price}
                                           onChangeText={(price) => this.setState({price})}
                                           placeholder=" price..."
                                           underlineColorAndroid="transparent"/>
                            </View>
                            <TextInput style={{
                                borderColor: "#99994d",
                                textAlignVertical: 'top',
                                borderWidth: 1,
                                borderRadius: 5,
                                marginTop: 10,
                                paddingLeft: 10,
                                height: 100
                            }}
                                       placeholder=" description..."
                                       value={this.state.preview}
                                       multiline={true}
                                       onChangeText={(preview) => this.setState({preview})}
                                       underlineColorAndroid="transparent"/>
                            {this.renderButton(isUpdate)}
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        )
    }

    onClick = (id, name, preview, price) => {
        getImage().then(data => {
            if (data) {
                const theloaimon = this.props.listCategory[this.state.index];
                createFood(name, preview, price, data, "nguyenlieu", theloaimon, this.props.user).then(data => {
                    this.props.resetPage('Main')
                });
            }
        });
    };

    onUpdateFood = (id, name, preview, price) => {
        if (this.state.update) {
            getImage().then(data => {
                if (data) {
                    alert(JSON.stringify(data))
                    l
                    const theloaimon = this.props.listCategory[this.state.index];
                    updateFood(id, name, preview, price, data, "nguyenlieu", theloaimon, this.props.user).then(data => {
                        this.props.resetPage('Main')
                    })
                }
            });
        } else {
            const {item} = this.props.navigation.state.params;
            const image = item && item.hinhanh || null;
            const theloaimon = this.props.listCategory[this.state.index];
            updateFood(id, name, preview, price, image, "nguyenlieu", theloaimon, this.props.user).then(data => {
                this.props.resetPage('Main')
            })
        }
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
        marginLeft: 10,
        borderRadius: 5,
        paddingLeft: 10,
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

function mapState(state) {
    return {
        isLogin: state.loginState.loginToken,
        user: state.meState.user,
        listCategory: state.categoryState.listCategory,
    }
}

export default connect(mapState, {navigateToPage, actionCreate, resetPage})(CreateFood);
