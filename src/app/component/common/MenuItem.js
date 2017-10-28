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
                        height: containerW,marginBottom:8,
                    }}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={onItemClick}
                                style={{
                                width: 60,
                                height: 60,
                                opacity:0.4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#bfbfbf',
                                borderRadius: 30
                            }}>
                            </TouchableOpacity>
                            <Image
                                source={menu.image}
                                style={styles.IconMenu}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.TextMenu}>{menu.name}</Text>
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    IconMenu: {
        position:'absolute',
        height: containerW / 3,
        width: containerW / 3,
    },
    TextMenu: {
        color: '#101010',
        fontSize:14,
    }
});

