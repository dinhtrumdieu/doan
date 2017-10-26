import DialogManager, {ScaleAnimation} from '../../../Libraries/react-native-dialog-component/src';
import {sizeWidth} from "./Size";
import {APP_COLOR} from "../../res/style/AppStyle";
import {StyleSheet,Keyboard} from 'react-native';
import React from 'react';
import ConfirmDialog from "../component/common/ConfirmDialog";
import MessageDialog from "../component/common/MessageDialog";

export default class DialogUtil {

    static dialogShown = false;

    static showConfirmDialog(title: string, content: string, confirmText: string, rejectText: string, onConfirmClick, onRejectClick) {
        DialogUtil.showDialog(
            styles.DialogStyle,
            sizeWidth(70),
            <ConfirmDialog
                title={title}
                content={content}
                confirmText={confirmText}
                rejectText={rejectText}
                onConfirmClick={() => {
                    this.dialogShown = false;
                    if (onConfirmClick) {
                        onConfirmClick();
                    }
                }}
                onRejectClick={() => {
                    this.dialogShown = false;
                    if (onRejectClick) {
                        onRejectClick();
                    }
                }}
            />
        );
    }

    static showMessageDialog(title: string, content: string, confirmText: string, onConfirmClick) {
        Keyboard.dismiss();
        DialogUtil.showDialog(
            styles.DialogStyle,
            sizeWidth(70),
            <MessageDialog
                title={title}
                content={content}
                confirmText={confirmText}
                onConfirmClick={() => {
                    this.dialogShown = false;
                    if (onConfirmClick) {
                        onConfirmClick();
                    }
                }}
            />
        );
    }

    static showDialog(dialogStyle, width, dialog) {
        if (this.dialogShown) return;
        this.dialogShown = true;
        DialogManager.show({
            onDismissed: () => this.dialogShown = false,
            width: width || sizeWidth(70),
            ScaleAnimation: new ScaleAnimation(),
            dialogStyle: dialogStyle || styles.DialogStyle,
            children: (
                dialog
            ),
        });
    }

    static dismiss() {
        DialogManager.dismiss();
    }

}

const styles = StyleSheet.create({
    DialogStyle: {
        borderRadius: sizeWidth(1.06),
        borderWidth: 4,
        borderColor: APP_COLOR,
        alignItems: 'center',
    },
});