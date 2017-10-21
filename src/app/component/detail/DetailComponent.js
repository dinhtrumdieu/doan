import React, {Component} from 'react';
import {
    Image,
    ImageBackground, ScrollView,
    View, StyleSheet, TouchableOpacity
} from 'react-native';
import WrapText from "../common/WrapText";
import Text from "../common/Text";
import {AVENIR_NEXT_BOLD, AVENIR_NEXT_REGULAR} from "../../../res/font/Font";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";

let test = '300g khoai tây\n' +
    '\n' +
    '130g bột mỳ\n' +
    '\n' +
    '1 quả trứng gà\n' +
    '\n' +
    '1 muỗng canh nước mắm\n' +
    '\n' +
    '1 chút muối\n' +
    '\n' +
    '2 tép tỏi\n' +
    '\n' +
    '1 cọng hành lá\n' +
    '\n' +
    '1/3 muỗng canh ớt bột\n' +
    '\n' +
    '1 muỗng cafe giấm';

let mota = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức. ' +
    'Từng miếng bánh vàng ươm,  dẻo ngon lạ miệng của bánh cùng với hỗn hợp trộn cay đậm đà, vừa ăn vừa xuýt xoa thật đã! ';
export default class DetailComponent extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Phở</Text>
    );

    renderStar = () => (
        <Image style={{height: 13, width: 13}}
               resizeMode="contain"
               source={require('../../../res/img/star.png')}/>
    );

    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../res/img/bg_app.jpg')}>
                <ToolBar left={this.renderLeftToolBar()}
                         center={this.renderCenterToolBar()}/>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <Image style={{height: 200, width: '100%'}} source={require('../../../res/img/pho.jpg')}/>
                        <View style={{marginHorizontal: 40, flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontSize: 20, color: '#0aa11d', flex: 1}}>Phở Kon Tum</Text>
                            <Text style={{fontSize: 14, color: '#0aa11d', alignSelf: 'flex-end'}}>15.000 VNĐ</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginHorizontal: 40}}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: 100,
                                marginRight: 5
                            }}>
                                {this.renderStar()}
                                {this.renderStar()}
                                {this.renderStar()}
                                {this.renderStar()}
                                {this.renderStar()}
                            </View>
                            <Text style={{fontSize: 10, alignSelf: 'flex-end'}}>1 đánh giá</Text>
                        </View>

                        <View style={{marginHorizontal: 40, marginTop: 15}}>
                            <WrapText>
                                {mota}
                            </WrapText>
                        </View>

                        <TouchableOpacity style={{flexDirection: 'row',marginHorizontal:40,marginVertical:20}}>
                            <Image style={{height: 60, width: 60, borderRadius: 30}}
                                   source={require('../../../res/img/pho.jpg')}/>
                            <View style={{marginLeft:10,alignSelf:'center'}}>
                                <Text style={{fontSize:15}}>Nguyễn Trung Định</Text>
                                <Text>
                                    <Text style={{fontFamily: AVENIR_NEXT_BOLD ,color:'blue'}}>854 </Text>
                                    món ăn *
                                    <Text style={{fontFamily: AVENIR_NEXT_BOLD,color:'blue'}}> 9 </Text>
                                    quan tâm
                                </Text>
                                <TouchableOpacity
                                    style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image resizeMode="contain" style={{height:15,width:15,marginRight:5}}
                                           source={require('../../../res/img/ic_like.png')}/>
                                    <Text>Quan tâm</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginHorizontal: 40}}>
                            <Text style={styles.TextNameFood}>Nguyên liệu</Text>
                            <WrapText>
                                {test}
                            </WrapText>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        height: 50,
                        backgroundColor: '#d4d4d4',
                        opacity: 0.3,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                    }}/>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color: '#fff', fontSize: 14}}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    TextNameFood: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: AVENIR_NEXT_REGULAR,
        color: '#0aa11d'
    },
    Button: {
        height: 40,
        width: 90,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 10
    }
});