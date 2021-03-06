import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Text from "../common/Text";
import WrapText from "../common/WrapText";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import FetchImage from "../common/FetchImage";
import {IMAGE_ADDRESS} from "../../api/Api";

class ItemCategoryRight extends Component {

    onClick = (item)=>{
        this.props.navigateToPage('ListCategory',{item:item});
    };

    render() {
        const {item} = this.props;
        const id = item && item.id;
        const name = item && item.name ? item.name:'';
        const preview = item && item.mota ? item.mota:'';
        const price = item && item.price ? item.price:'0';
        const image = item && item.hinhanh && IMAGE_ADDRESS + item.hinhanh;
        return (
            <TouchableOpacity onPress={()=>this.onClick(item)} style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginRight: 25, marginTop: 10, backgroundColor: '#fff',borderRadius:5}}>
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
                            alignSelf: 'flex-start',
                            marginVertical: 5,
                        }}>
                            <Text style={{color:'#fff'}}>View List</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                <FetchImage style={{height: 95, width: 95, borderRadius: 10, position: 'absolute',right:0}}
                       uri={image}/>
            </TouchableOpacity>
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
        marginLeft:15,
    }
});

export default connect(null, {navigateToPage})(ItemCategoryRight);

