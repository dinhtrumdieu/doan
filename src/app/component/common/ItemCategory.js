import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Text from "./Text";
import WrapText from "./WrapText";

export default class ItemCategory extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#fff'}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <Text style={{fontSize: 16}}>Soup</Text>

                        <WrapText numberOfLines={3}>Hello world constructor Hello world constructor Hello world
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
                            <Text style={{color:'#fff'}}>View List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{height: 95, width: 95, borderRadius: 10, position: 'absolute'}}
                       source={require('../../../res/img/images.jpg')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        margin:10,
        height: 110,
        backgroundColor: 'transparent'
    },
    Content: {
        flex: 3,
    }
});

