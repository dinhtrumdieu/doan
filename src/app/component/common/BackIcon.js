import React, {Component} from 'react';
import {
    Image, TouchableOpacity, StyleSheet
} from 'react-native';
import {sizeWidth} from "../../utils/Size";
import {connect} from "react-redux";
import {goBack} from "../../router/NavigationAction";

class BackIcon extends Component {
    render() {
        const {goBack} = this.props;
        return (
            <TouchableOpacity style={styles.Container} onPress={() => goBack()}>
                <Image style={{width: sizeWidth(6.4), height: sizeWidth(5)}}
                       resizeMode='contain'
                       source={require('../../../res/img/ic_back_white.png')}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        padding: sizeWidth(2.13),
    }
});

export default connect(null, {goBack})(BackIcon);