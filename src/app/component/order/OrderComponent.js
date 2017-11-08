import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView
} from 'react-native';
import Text from "../common/Text";
import {AVENIR_NEXT_BOLD} from "../../../res/font/Font";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import {sizeFont, sizeWidth} from "../../utils/Size";

class OrderComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            number:1,
        }
    }

    renderLeft = () => (
        <BackIcon/>
    );

    renderCenter = () => (
        <Text style={TOOL_BAR_TEXT}>THÔNG TIN ĐƠN HÀNG</Text>
    );

    tru = ()=>{
        if(this.state.number > 1){
            this.setState({
                number:this.state.number-1,
            });
        }
    };

    add = ()=>{
      this.setState({
          number:this.state.number+1,
      });
    };

    render() {
        const {item} = this.props.navigation.state.params;
        const name = item && item.name ? item.name : "";
        const preview = item && item.preview ? item.preview : "";
        const price = item && item.price ? item.price : 0;
        const image = item && item.images ? item.images : require('../../../res/img/pho.jpg');
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
                            <Text style={{flex: 1, fontFamily: AVENIR_NEXT_BOLD}}>{name}</Text>
                            <Image style={{width: 45, height: 45}} source={image}/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Số lượng:</Text>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                    <TouchableOpacity
                                        onPress={this.tru}
                                        style={{flex:1,paddingVertical: sizeWidth(2)}}>
                                        <Text style={{
                                            fontSize: sizeFont(4),
                                            textAlign: 'center',
                                            fontFamily: null,
                                            textAlignVertical: 'center'
                                        }}>-</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{
                                            fontSize: sizeFont(3.5),
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                            color: 'black',
                                            fontFamily: null
                                        }}>{this.state.number}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={this.add}
                                        style={{flex:1,paddingVertical: sizeWidth(2)}}>
                                        <Text style={{
                                            fontSize: sizeFont(4),
                                            textAlign: 'center',
                                            fontFamily: null,
                                            textAlignVertical: 'center'
                                        }}>+</Text>
                                    </TouchableOpacity>
                            </View>
                            <Text style={{marginLeft:40}}>x {price*this.state.number} đ</Text>
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
                            <Text style={{fontFamily: AVENIR_NEXT_BOLD}}>x {price*this.state.number} đ</Text>
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
                            <TouchableOpacity>
                                <Image style={{width: 15, height: 15}}
                                       source={require('../../../res/img/plus.png')}/>
                            </TouchableOpacity>
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
                            <TouchableOpacity>
                                <Image style={{width: 15, height: 15}}
                                       source={require('../../../res/img/add.png')}/>
                            </TouchableOpacity>
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
                            <Text style={{fontSize: 16, fontFamily: AVENIR_NEXT_BOLD, color: 'red'}}>x {price*this.state.number} đ</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.props.navigateToPage('ThankYou')
                        }} style={{
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
export default connect(null, {navigateToPage})(OrderComponent)
