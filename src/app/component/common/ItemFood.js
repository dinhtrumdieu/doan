import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity,Dimensions
} from 'react-native';
import Text from "./Text";
import WrapText from "./WrapText";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

class ItemFood extends Component {

    onClick = ()=>{
      this.props.navigateToPage('Detail');
    };

    render() {
        const {item} = this.props;
        const name = item && item.name ? item.name:'';
        const preview = item && item.preview ? item.preview:'';
        const price = item && item.price ? item.price:'0';
        const image = item && item.images ? item.images : require('../../../res/img/pho.jpg');
        return (
            <TouchableOpacity onPress={this.onClick} style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#f3f3f3',borderRadius:5}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <View style={{height: 1, backgroundColor: '#aaa', marginTop: 10, marginRight: 10}}/>
                        <WrapText numberOfLines={4} >{preview}</WrapText>
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
                       source={image}/>
                <View style={{position: 'absolute', flexDirection: 'row',width:'100%'}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 3, justifyContent: 'space-between',flexDirection: 'row',marginHorizontal:10,paddingLeft:15}}>
                        <Text style={{fontSize: 14,color:'black',fontFamily:'AvenirNext-Bold'}}>{name}</Text>
                        <Text style={{fontSize: 14,color:'black'}}>{price} vnđ</Text>
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

export default connect(null,{navigateToPage})(ItemFood);

