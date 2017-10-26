import React, {PureComponent} from 'react';
import {
    Text,
    View,
    StyleSheet, Platform
} from 'react-native';
import {APP_TEXT_COLOR} from "../../../res/style/AppStyle";
import {sizeFont, sizeWidth} from "../../utils/Size";
import {AVENIR_NEXT_REGULAR} from "../../../res/font/Font";

const EMPTY = '';

export default class AppText extends PureComponent {
    render() {

        const {style} = this.props;
        const children = (this.props.children !== null && this.props.children !== undefined) ? this.props.children : EMPTY;

        if (Platform.OS === 'ios') {
            return (
                <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.Text, style]}>
                    {children}
                </Text>
            );
        } else {
            return (
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.Text, style, {fontFamily: AVENIR_NEXT_REGULAR}]}>
                    {children}
                </Text>
            );
        }
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: sizeFont(3.73),
        color: APP_TEXT_COLOR,
        backgroundColor: 'transparent'
    }
});
