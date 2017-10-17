import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    View, StyleSheet, TouchableOpacity
} from 'react-native';
import WrapText from "../common/WrapText";
import Text from "../common/Text";
import {AVENIR_NEXT_BOLD} from "../../../res/font/Font";

export default class DetailComponent extends Component {
    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../res/img/bg_app.jpg')}>
                <View style={{flex:1}}>
                    <Image style={{height: 200, width: '100%'}} source={require('../../../res/img/images.jpg')}/>
                    <View style={{marginHorizontal: 40}}>
                        <Text style={styles.TextNameFood}>Ga Hap chien gion</Text>
                        <WrapText numberOfLines={4}>Hello world constructor Hello world constructor Hello world
                            constructorHello world constructor
                            Hello world constructorHello world constructor
                            Hello world constructor
                        </WrapText>
                    </View>
                    <View style={{
                        height: 100,
                        backgroundColor: '#fff',
                        marginTop: 20,
                        paddingHorizontal: 40,
                        paddingVertical: 10,
                        flexDirection: 'row'
                    }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{position: 'absolute', top: 0}}>Tiền phải trả:</Text>
                            <Text style={{fontSize: 24, alignSelf: 'center'}}>15.000 vnd</Text>
                        </View>
                        <View style={{width: 1, borderWidth: 1, borderColor: '#aaa', marginHorizontal: 20}}/>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{position: 'absolute', top: 0}}>Rating:</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Image style={{height: 15, width: 15}} source={require('../../../res/img/ic_home.png')}/>
                                <Image style={{height: 15, width: 15}} source={require('../../../res/img/ic_home.png')}/>
                                <Image style={{height: 15, width: 15}} source={require('../../../res/img/ic_home.png')}/>
                                <Image style={{height: 15, width: 15}} source={require('../../../res/img/ic_home.png')}/>
                                <Image style={{height: 15, width: 15}} source={require('../../../res/img/ic_home.png')}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{alignItems: 'center',
                    justifyContent: 'center',}}>
                    <View style={{
                        height: 50,
                        backgroundColor: '#d4d4d4',
                        opacity:0.3,
                        width: '100%',
                        justifyContent:'center',
                        alignItems: 'center',
                        paddingHorizontal:15,
                    }}/>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color:'#fff',fontSize:14}}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    TextNameFood: {
        fontSize: 22,
        marginVertical: 10,
        fontFamily: AVENIR_NEXT_BOLD,
        color: '#000'
    },
    Button:{
        height:40,
        width:90,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        alignSelf:'flex-end',
        position:'absolute',
        right:10
    }
});