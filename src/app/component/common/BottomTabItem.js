import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {sizeWidth} from "../../utils/Size";

export default class BottomTabItem extends Component {
    render() {
        const {icon} = this.props;
        return (
            <Image resizeMode={'contain'} style={styles.Icon} source={icon}/>
        );
    }
}

BottomTabItem.propTypes = {
    icon: PropTypes.any,
};

const styles = StyleSheet.create({
    Icon: {
        width: sizeWidth(6.4),
        height: sizeWidth(6.4),
    }
});
