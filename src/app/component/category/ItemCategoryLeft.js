import React, {Component} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Text from "../common/Text";
import WrapText from "../common/WrapText";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

class ItemCategoryLeft extends Component {

    onClick = ()=>{
      this.props.navigateToPage('ListCategory');
    };

    render() {
        const {item} = this.props;
        const name = item && item.name ? item.name:'';
        const preview = item && item.preview ? item.preview:'';
        const price = item && item.price ? item.price:'0';
        const image = item && item.images ? item.images : require('../../../res/img/pho.jpg');
        return (
            <TouchableOpacity onPress={this.onClick} style={styles.Container}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: 25, marginTop: 10, backgroundColor: '#fff',borderRadius:5}}>
                    <View style={{flex: 1}}/>
                    <View style={styles.Content}>
                        <Text style={{fontSize: 16}}>{name}</Text>
                        <WrapText numberOfLines={3}>{preview}
                        </WrapText>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60,
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
                <Image style={{height: 95, width: 95, borderRadius: 10, position: 'absolute'}}
                       source={image}/>
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

