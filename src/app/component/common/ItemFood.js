import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity,Dimensions
} from 'react-native';
import Text from "./Text";
import WrapText from "./WrapText";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import {fMoney} from "../../utils/MoneyFormat";
import FetchImage from "./FetchImage";
import {IMAGE_ADDRESS} from "../../api/Api";
const mota = 'Bánh khoai cay với cách làm khá đơn giản này chắc chắn sẽ chinh phục vị giác bất kì ai ngay từ lần đầu thưởng thức.' +
    ' Từng miếng bánh vàng ươm, bóng bẩy trông cực kì bắt mắt';
class ItemFood extends Component {

    onClick = (item)=>{
      this.props.navigateToPage('Detail',{item});
    };

    render() {
        const {item} = this.props;
        const name = item && item.tenmonan ? item.tenmonan:'';
        const preview = item && item.chitiet ? item.chitiet : mota;
        const price = item && item.gia ? item.gia:'0';
        const cooker = item && item.noitro;
        const nameCooker = item && item.noitro && item.noitro.fullname;
        const image = item  && item.hinhanh && IMAGE_ADDRESS+item.hinhanh;
        return (
            <TouchableOpacity onPress={()=>this.onClick(item)} style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#f3f3f3',borderRadius:5}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <View style={{height: 1, backgroundColor: '#aaa', marginTop: 10, marginRight: 10}}/>
                        <WrapText style={{height:60}} numberOfLines={4} >{preview}</WrapText>
                        <TouchableOpacity
                            onPress={() => this.props.navigateToPage('DetailCooker',{item:cooker})}
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            marginVertical: 5,
                        }}>
                            <Text style={{color: 'green'}}>{nameCooker}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FetchImage
                    uri={image}
                    style={{height: 95, width: 95, borderRadius: 10, position: 'absolute'}}
                />
                {/*<Image style={{height: 85, width: 85, borderRadius: 10, position: 'absolute'}}
                       source={image}/>*/}
                <View style={{position: 'absolute', flexDirection: 'row',width:'100%'}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 3, justifyContent: 'space-between',flexDirection: 'row',marginHorizontal:10,paddingLeft:15}}>
                        <Text style={{fontSize: 14,color:'black'}}>{name}</Text>
                        <Text style={{fontSize: 14,color:'black'}}>{fMoney(price)} vnđ</Text>
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

