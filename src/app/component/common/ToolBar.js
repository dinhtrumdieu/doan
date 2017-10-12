import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types'
import Text from "./Text";
import {sizeFont, sizeHeight} from "../../utils/Size";
import {APP_COLOR} from "../../../res/style/AppStyle";

export default class ToolBar extends Component {

    static propTypes = {
        left: PropTypes.object,
        center: PropTypes.object,
        right: PropTypes.object,
        title: PropTypes.string,
    };

    render() {
        const {left, center, right, title} = this.props;
        if (title) {
            return (
                <View>
                    <View style={styles.StatusBar}/>
                    <View style={styles.Default}>
                        <Text style={styles.ToolBarText}>{title}</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={styles.StatusBar}/>
                    <View style={styles.Container}>
                        <View style={styles.Left}>
                            {left}
                        </View>
                        <View style={styles.Center}>
                            {center}
                        </View>
                        <View style={styles.Right}>
                            {right}
                        </View>
                    </View>
                </View>

            );
        }
    }
}

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
    StatusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: APP_COLOR,
    },
    Container: {
        height: sizeHeight(6.9),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: APP_COLOR,
        alignItems: 'center',
    },
    Default: {
        height: sizeHeight(6.9),
        flexDirection: 'row',
        backgroundColor: APP_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Left: {
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    Right: {
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    Center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ToolBarText: {
        color: '#fff',
        fontSize: sizeFont(4.8),
    }
});

