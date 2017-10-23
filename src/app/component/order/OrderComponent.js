import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView
} from 'react-native';
import Text from "../common/Text";
import {AVENIR_NEXT_BOLD} from "../../../res/font/Font";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";

export default class OrderComponent extends Component {

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>THÔNG TIN ĐƠN HÀNG</Text>
    );

    render() {
        return (
            <View style={styles.Container}>
                <ToolBar left={this.renderLeft()}
                         center={this.renderCenter()}/>
                <ScrollView>
                    <View style={{paddingHorizontal: 20}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 15
                        }}>
                            <Text>
                                <Text style={{fontFamily: AVENIR_NEXT_BOLD}}>Bà nội trợ : </Text>
                                <Text style={{color: 'green'}}>Nguyễn Trung Định</Text>
                            </Text>
                            <Image style={{width: 15, height: 15}}
                                   source={require('../../../res/img/ic_pikalong.png')}/>
                        </View>
                        <View style={{
                            height: 1,
                            width: '100%',
                            borderStyle: 'dashed',
                            borderWidth: 0.6,
                            borderColor: '#b5b5b5',
                            borderRadius: 0.1
                        }}/>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 10,
                        }}>
                            <Text style={{flex: 1, fontFamily: AVENIR_NEXT_BOLD}}>Món phở ngon Kon Tum</Text>
                            <Image style={{width: 45, height: 45}} source={require('../../../res/img/pho.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Số lượng:</Text>
                            <View style={{flex: 1}}>

                            </View>
                            <Text>x 399.000 đ</Text>
                        </View>
                        <View style={{
                            height: 1,
                            width: '100%',
                            borderStyle: 'dashed',
                            borderWidth: 0.6,
                            marginVertical: 10,
                            borderColor: '#b5b5b5',
                            borderRadius: 0.1
                        }}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily: AVENIR_NEXT_BOLD}}>Tổng đơn hàng:</Text>
                            <Text style={{fontFamily: AVENIR_NEXT_BOLD}}>x 799.000 đ</Text>
                        </View>
                        <View style={{
                            height: 1,
                            width: '100%',
                            borderStyle: 'dashed',
                            borderWidth: 0.6,
                            marginVertical: 10,
                            borderColor: '#b5b5b5',
                            borderRadius: 0.1
                        }}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            <Image style={{width: 15, height: 15}}
                                   source={require('../../../res/img/voucher.png')}/>
                            <Text style={{flex: 1, color: '#000', marginLeft: 10, fontSize: 14}}>Sử dụng voucher</Text>
                            <Image style={{width: 15, height: 15}}
                                   source={require('../../../res/img/plus.png')}/>
                        </View>
                        <View style={{
                            height: 1,
                            width: '100%',
                            borderStyle: 'dashed',
                            borderWidth: 0.6,
                            marginVertical: 10,
                            borderColor: '#b5b5b5',
                            borderRadius: 0.1
                        }}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            <Image style={{width: 15, height: 15}}
                                   source={require('../../../res/img/discount.png')}/>
                            <Text style={{flex: 1, color: '#000', marginLeft: 10, fontSize: 14}}>Sử dụng điểm tích
                                trữ</Text>
                            <Image style={{width: 15, height: 15}}
                                   source={require('../../../res/img/add.png')}/>
                        </View>
                        <View style={{
                            height: 1,
                            width: '100%',
                            borderStyle: 'dashed',
                            borderWidth: 0.6,
                            marginVertical: 10,
                            borderColor: '#b5b5b5',
                            borderRadius: 0.1
                        }}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 16, fontFamily: AVENIR_NEXT_BOLD, color: 'red'}}>Tổng thành
                                tiền:</Text>
                            <Text style={{fontSize: 16, fontFamily: AVENIR_NEXT_BOLD, color: 'red'}}>x 799.000 đ</Text>
                        </View>
                        <TouchableOpacity style={{
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 5,
                            marginVertical: 20
                        }}>
                            <Text style={{color: 'white', fontSize: 14}}>Đặt hàng</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{fontSize: 14, color: '#000'}}>Ghi chú :</Text>
                            <TextInput style={{height: 100, backgroundColor: '#aaa', textAlignVertical: 'top'}}
                                       multiline={true} underlineColorAndroid="transparent"
                                       placeholder="Nếu có yêu cầu hay khác thì gõ vô đây"/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
});

