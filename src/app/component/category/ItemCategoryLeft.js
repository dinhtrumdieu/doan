import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Text from "../common/Text";
import WrapText from "../common/WrapText";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";
import FetchImage from "../common/FetchImage";

class ItemCategoryLeft extends Component {

    onClick = (item)=>{
      this.props.navigateToPage('ListCategory',{item:item});
    };

    render() {
        const {item} = this.props;
        const id = item && item.id;
        const name = item && item.name ? item.name:'';
        const preview = item && item.mota ? item.mota:'';
        const price = item && item.price ? item.price:'0';
        const img = item && item.hinhanh;
        const image = item && item.images ? item.images : require('../../../res/img/pho.jpg');
        return (
            <TouchableOpacity onPress={()=>this.onClick(item)} style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#fff',borderRadius:5}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <Text style={{fontSize: 16}}>{name}</Text>
                        <WrapText numberOfLines={3}>{preview}
                        </WrapText>
                        <TouchableOpacity
                            onPress={()=>this.onClick(item)}
                            style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 25,
                            backgroundColor: 'green',
                            borderRadius: 10,
                            alignSelf: 'flex-end',
                            marginVertical: 5,
                        }}>
                            <Text style={{color:'#fff'}}>View List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FetchImage style={{height: 75, width: 75, borderRadius: 10, position: 'absolute'}}
                       uri={img}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        margin:10,
        height: 110,
        backgroundColor: 'transparent',
    },
    Content: {
        flex: 3,
        marginRight:15,
    }
});

export default connect(null, {navigateToPage})(ItemCategoryLeft);

