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
            <TouchableOpacity onPress={onItemClick}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.Container}/>
                    <View style={{justifyContent:'space-around',alignItems:'center',position:'absolute',width: containerW,
                        height: containerW,}}>
                        <Image
                            source={menu.image}
                            style={styles.IconMenu}
                            resizeMode='contain'
                        />
                        <Text style={styles.TextMenu}>{menu.name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: containerW,
        height: containerW,
        alignItems: 'center',
        opacity:0.7,
        justifyContent: 'space-around',
        backgroundColor: '#a10e12',
        borderRadius: sizeWidth(0.8),
        marginRight: sizeWidth(2.13),
        marginBottom: 8,
    },
    IconMenu: {
        height: containerW / 3,
        width: containerW / 3,
        marginTop: containerW / 6
    },
    TextMenu: {
        color: '#f6f6f6'
    }
});

