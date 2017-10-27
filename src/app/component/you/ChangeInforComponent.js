import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity, CheckBox
} from 'react-native';
import ToolBar from "../common/ToolBar";
import Text from "../common/Text";
export default class ChangeInforComponent extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#aaa'}}>
                <ToolBar title='Chỉnh sửa thông tin'/>
                <View style={{flexDirection:'row',backgroundColor:'#fff',paddingVertical:15}}>
                    <Image source={require('../../../res/img/bg_app.jpg')} style={styles.Left}/>
                    <View style={{flex:1}}>
                        <Text>Nguyen Trung Dinh</Text>
                        <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <CheckBox/>
                            <Text style={{marginRight:30}}>Nam</Text>
                            <CheckBox/>
                            <Text>Nữ</Text>
                        </View>
                        <View style={{width: '100%', borderWidth: 0.8, borderColor: '#c6c6c6', marginVertical: 10}}/>
                        <Text>35 Nguyen Chanh</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    width: 150,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    borderRadius: 5,
                    alignSelf: 'center',
                    marginTop: 30
                }}>
                    <Text style={{color: 'white', fontSize: 14}}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Left:{
        width:60,
        height:60,
        borderRadius:30,
        marginHorizontal:20,
    },
    Right:{

    }
});
