import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizeFont, sizeWidth} from "../../utils/Size";
import WrapText from "./WrapText";
import Text from "./Text";
import {APP_COLOR} from "../../../res/style/AppStyle";
import PropTypes from 'prop-types';
import DialogManager from '../../../../Libraries/react-native-dialog-component/src';
export default class ConfirmDialog extends Component {

    onConfirmClick = () => {
        const {onConfirmClick} = this.props;
        DialogManager.dismiss();
        if (onConfirmClick) {
            onConfirmClick();
        }
    };

    onRejectClick = () => {
        const {onRejectClick} = this.props;
        DialogManager.dismiss();
        if (onRejectClick) {
            onRejectClick();
        }
    };

    render() {

        const {confirmText, rejectText, title, content} = this.props;

        return (
            <View style={styles.Container}>
                <View style={styles.ContentWrapper}>
                    <WrapText style={styles.TitleText}>{title}</WrapText>
                    <WrapText style={styles.ContentText}>{content}</WrapText>
                </View>
                <View style={styles.VerticalSeparator}/>
                <View style={styles.ActionContainer}>
                    <TouchableOpacity style={styles.ActionWrapper} onPress={this.onRejectClick}>
                        <Text style={styles.ActionText}>{rejectText}</Text>
                    </TouchableOpacity>
                    <View style={styles.HorizontalSeparator}/>
                    <TouchableOpacity style={styles.ActionWrapper} onPress={this.onConfirmClick}>
                        <Text style={styles.ActionText}>{confirmText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

ConfirmDialog.propTypes = {
    confirmText: PropTypes.string.isRequired,
    rejectText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onConfirmClick: PropTypes.func,
    onRejectClick: PropTypes.func,
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    ContentWrapper: {
        padding: sizeWidth(3.2),
        alignItems: 'center',
    },
    TitleText: {
        fontSize: sizeFont(3.73),
        fontWeight:'bold',
        marginBottom: 4,
    },
    ContentText: {
        fontSize: sizeFont(3.73),
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