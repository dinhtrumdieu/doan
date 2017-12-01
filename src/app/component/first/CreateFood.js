import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TextInput, Dimensions, TouchableOpacity, Picker} from "react-native";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import ImagePicker from "react-native-image-picker";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {sizeWidth} from "../../utils/Size";
import {createFood, uploadImage} from "../../api/Api";
import {Loaimonan} from "../../model/Loaimonan";
import {NoiTro} from "../../model/NoiTro";
import {actionCreate} from "../../redux/CreateAction";
import {getImage} from "../../utils/Store";


let loaimonan = new Loaimonan(3, "Món khai vị", "jjfjskafksafa","1321323");
let noitro = new NoiTro(7, "dinhtrum@gmail.com", "123456", "Nguyễn Trung Định","123231", "Hòa Khánh", "01982772", 0, 0,true);

class CreateFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            imageUri: null,
            path: '',
            nameFood: null,
            preview: null,
            price: null,
            category:'Thể loại',
            index:0,
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
        if(data){
            for (i = 0; i < data.length; i++) {
                listPickerItem.push(this.renderPickerItem(data[i]))
            }
        }
        return listPickerItem
    };

    getID = (itemValue,itemIndex)=>{
        const data = this.props.listCategory;
        this.setState({
            language: itemValue,
        });
        alert(data[itemIndex].id)
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

                    <View style={{
                        flex: 2,
                        width: Dimensions.get("window").width,
                        marginVertical: 20,
                        paddingHorizontal: 30
                    }}>
                        <TextInput style={{borderColor: "#99994d", borderWidth: 1, borderRadius: 5,paddingLeft:10,paddingVertical:10}}
                                   placeholder=" food name"
                                   maxLength={40}
                                   value={this.state.nameFood}
                                   onChangeText={(nameFood) => this.setState({nameFood})}
                                   underlineColorAndroid="transparent"/>

                        <View style={{marginVertical: 5, flexDirection: "row", justifyContent: "center"}}>
                            <Picker
                                style={{width:150}}
                                mode="dropdown"
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemIndex) => this.getID(itemValue,itemIndex)}>
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
                            paddingLeft:10,
                            height: 100
                        }}
                                   placeholder=" description..."
                                   value={this.state.preview}
                                   multiline={true}
                                   onChangeText={(preview) => this.setState({preview})}
                                   underlineColorAndroid="transparent"/>

                        <TouchableOpacity onPress={() => {
                            this.onClick(this.state.nameFood, this.state.preview, this.state.price)
                        }}>
                            <Text style={styles.create}> Create </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    onClick = (name, preview, price) => {
        getImage().then(data=>{
            if(data){
                const theloaimon = this.props.listCategory[this.state.index];
                createFood(name, preview, price, data, "asdsds", theloaimon, this.props.user).then(data=>{
                    this.props.navigateToPage('Detail',{item:data})
                });
            }
        });

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
        paddingLeft:10,
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

export default connect(mapState, {navigateToPage, actionCreate})(CreateFood);
