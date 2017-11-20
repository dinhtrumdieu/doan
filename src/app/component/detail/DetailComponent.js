import React, {Component} from 'react';
import {
    Image,
    ImageBackground, ScrollView,
    View, StyleSheet, TouchableOpacity
} from 'react-native';
import WrapText from "../common/WrapText";
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {APP_COLOR, TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {fMoney} from "../../utils/MoneyFormat";

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
 class DetailComponent extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = (name) => (
        <Text style={TOOL_BAR_TEXT}>{name}</Text>
    );

    renderStar = () => (
        <Image style={{height: 13, width: 13}}
               resizeMode="contain"
               source={require('../../../res/img/star.png')}/>
    );

    onNavigate = (item)=>{
        this.props.navigateToPage('Order',{item});
    };

    render() {
        const {item} = this.props.navigation.state.params;
        const name = item && item.name ? item.name :"";
        const preview = item && item.preview ? item.preview:"";
        const price = item && item.price ? item.price:0;
        const image = item && item.images ? item.images : require('../../../res/img/pho.jpg');
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <ToolBar left={this.renderLeftToolBar()}
                         center={this.renderCenterToolBar(name)}/>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <Image style={{height: 200, width: '100%'}} source={image}/>
                        <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontSize: 20, color: '#0aa11d', flex: 1}}>{name}</Text>
                            <Text style={{fontSize: 14, color: '#0aa11d', alignSelf: 'flex-end'}}>{fMoney(price)} VNĐ</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
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
                        </View>

                        <View style={{marginHorizontal: 20, marginTop: 15}}>
                            <WrapText>
                                {preview}
                            </WrapText>
                        </View>

                        <TouchableOpacity onPress={()=>this.props.navigateToPage('DetailCooker')} style={{flexDirection: 'row',marginHorizontal:20,marginVertical:20}}>
                            <Image style={{height: 60, width: 60, borderRadius: 30}}
                                   source={require('../../../res/img/pho.jpg')}/>
                            <View style={{marginLeft:10,alignSelf:'center'}}>
                                <Text style={{fontSize:15}}>Nguyễn Trung Định</Text>
                                <Text>
                                    <Text style={{color:'blue'}}>854 </Text>
                                    món ăn *
                                    <Text style={{color:'blue'}}> 9 </Text>
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
                        <View style={{marginHorizontal: 20}}>
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
                        backgroundColor: APP_COLOR,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                    }}/>
                    <TouchableOpacity onPress={()=>this.onNavigate(item)} style={styles.Button}>
                        <Text style={{color: '#fff', fontSize: 14}}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextNameFood: {
        fontSize: 18,
        marginVertical: 10,
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

export default connect(null,{navigateToPage})(DetailComponent);