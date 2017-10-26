import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizeFont, sizeWidth} from "../../utils/Size";
import WrapText from "./WrapText";
import Text from "./Text";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {AVENIR_NEXT_BOLD, AVENIR_NEXT_MEDIUM} from "../../../res/font/Font";
import PropTypes from 'prop-types';
import DialogManager from '../../../../Libraries/react-native-dialog-component/src';

export default class MessageDialog extends Component {

    onConfirmClick = () => {
        const {onConfirmClick} = this.props;
        DialogManager.dismiss();
        if (onConfirmClick) {
            onConfirmClick();
        }
    };

    renderTitle = (title) => {
        if (title) {
            return (
                <WrapText style={styles.TitleText}>{title}</WrapText>
            )
        }
    };

    render() {

        const {confirmText, title, content} = this.props;

        return (
            <View style={styles.Container}>
                <View style={styles.ContentWrapper}>
                    {this.renderTitle(title)}
                    <WrapText style={styles.ContentText}>{content}</WrapText>
                </View>
                <View style={styles.VerticalSeparator}/>
                <View style={styles.ActionContainer}>
                    <TouchableOpacity style={styles.ActionWrapper} onPress={this.onConfirmClick}>
                        <Text style={styles.ActionText}>{confirmText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

MessageDialog.propTypes = {
    confirmText: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    onConfirmClick: PropTypes.func,
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    ContentWrapper: {
        paddingHorizontal: sizeWidth(3.2),
        paddingVertical: sizeWidth(6),
        alignItems: 'center',
    },
    TitleText: {
        fontSize: sizeFont(4.8),
        fontWeight:'bold',
        marginBottom: 10,
    },
    ContentText: {
        fontSize: sizeFont(4),
        fontFamily: AVENIR_NEXT_MEDIUM,
    },
    ActionContainer: {
        flexDirection: 'row',
    },
    VerticalSeparator: {
        height: 1,
        width: sizeWidth(70) - 8,
        backgroundColor: '#DDDDDD',
    },
    HorizontalSeparator: {
        width: 1,
        backgroundColor: '#DDDDDD',
    },
    ActionWrapper: {
        flex: 1,
        padding: sizeWidth(4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActionText: {
        color: APP_COLOR,
        fontSize: sizeFont(3.73)
    },
});