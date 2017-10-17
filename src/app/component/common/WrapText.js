import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {AVENIR_NEXT_REGULAR} from "../../../res/font/Font";
import {APP_TEXT_COLOR} from "../../../res/style/AppStyle";
import {sizeFont, sizeWidth} from "../../utils/Size";

export default class WrapText extends Component {
    render() {
        const {children, style, wrapStyle} = this.props;
        const {numberOfLines, ellipsizeMode} = this.props;

        return (
            <View style={[{flexDirection:'row'}, wrapStyle]}>
                <Text numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={[styles.Text, style]}>{children}</Text>
            </View>
        );
    }
}

WrapText.propTypes = {
    numberOfLines: PropTypes.number,
    ellipsizeMode: PropTypes.string,
    wrapStyle: PropTypes.any
};

const styles = StyleSheet.create({
    Text: {
        flexWrap: 'wrap',
        fontSize: sizeFont(3.2),
        color: APP_TEXT_COLOR,
        fontFamily: AVENIR_NEXT_REGULAR,
    }
});
