import React, {Component} from 'react';
import {
    Image, TouchableOpacity, StyleSheet, View
} from 'react-native';
import {sizeFont, sizeWidth} from "../../utils/Size";
import Text from "./Text";
import {AVENIR_NEXT_MEDIUM} from "../../../res/font/Font";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

class CartIcon extends Component {

    onCLick = ()=>{
      this.props.navigateToPage('');
    };

    render() {
        const numberCart = 0;
        return (
            <View>
                <TouchableOpacity onPress={this.onCLick}
                                  style={{width: sizeWidth(8), height: sizeWidth(8), overflow: 'visible'}}
                >
                    <Image style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: sizeWidth(6.4),
                        width: sizeWidth(6.4)
                    }} source={require('../../../res/img/ic_cart.png')}/>
                    {numberCart ? this.renderNumberCart(numberCart) : null}
                </TouchableOpacity>
            </View>
        )
    }

    renderNumberCart = (numberCart) => {
        return (
            <View style={styles.CartNo}>
                <Text style={styles.Barge}>{numberCart}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    Barge: {
        fontSize: sizeFont(3),
        color: APP_COLOR,
        fontFamily: AVENIR_NEXT_MEDIUM,
    },
    CartNo: {
        height: sizeWidth(4.26),
        padding: sizeWidth(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#013307',
        borderWidth: 1,
        backgroundColor: '#DEF4E1',
        position: 'absolute',
        borderRadius: sizeWidth(2.13),
        top: 0,
        right: 0,
        overflow: 'hidden',
    },
});

export default connect(null, {navigateToPage})(CartIcon);
