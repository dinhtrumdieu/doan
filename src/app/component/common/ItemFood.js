import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity,Dimensions
} from 'react-native';
import Text from "./Text";
import WrapText from "./WrapText";

export default class ItemFood extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#a10e12',borderRadius:5}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <View style={{height: 1, backgroundColor: '#aaa', marginTop: 10, marginRight: 10}}/>
                        <WrapText numberOfLines={4} style={{color:'#fff'}}>Hello world constructor Hello world constructor Hello world
                            constructorHello world constructor
                            Hello world constructorHello world constructor
                            Hello world constructor
                            Hello world constructorHello world constructor
                        </WrapText>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60,
                            height: 25,
                            backgroundColor: 'green',
                            borderRadius: 10,
                            alignSelf: 'flex-end',
                            margin: 5,
                        }}>
                            <Text style={{color: '#fff'}}>Add card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{height: 95, width: 95, borderRadius: 10, position: 'absolute'}}
                       source={require('../../../res/img/images.jpg')}/>
                <View style={{position: 'absolute', flexDirection: 'row',width:'100%'}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 3, justifyContent: 'space-between',flexDirection: 'row',marginHorizontal:10,paddingLeft:15}}>
                        <Text style={{fontSize: 14,color:'green'}}>Soup</Text>
                        <Text style={{fontSize: 14,color:'green'}}>15.000 vnđ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    Container: {
        margin: 10,
        flexDirection:'row',
        backgroundColor: 'transparent'
    },
    Content: {
        flex: 3,
    }
});

