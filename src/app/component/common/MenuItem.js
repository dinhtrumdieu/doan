import React from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from "../common/Text";
import {sizeWidth} from "../../utils/Size";

const deviceW = Dimensions.get('window').width;
const containerW = (deviceW - sizeWidth(8.52)) / 4;

export default class MenuItem extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.item;
        const {onItemClick} = this.props;

        return (
            <View style={{
                justifyContent: 'space-around', alignItems: 'center', width: containerW,
                height: containerW, marginBottom: 8,
            }}>
                <TouchableOpacity onPress={onItemClick} style={styles.ViewItem}>
                    <Image
                        source={menu.image}
                        style={styles.IconMenu}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <Text style={styles.TextMenu}>{menu.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    IconMenu: {
        position: 'absolute',
        height: containerW / 3,
        width: containerW / 3,
    },
    TextMenu: {
        color: '#101010',
        fontSize: 14,
    },
    ViewItem:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6B83',
        borderRadius: 30
    }
});

