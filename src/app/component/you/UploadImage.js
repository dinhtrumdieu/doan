import React, {Component} from 'react';
import {
    TouchableOpacity, StyleSheet,
    View, Image
} from 'react-native';
import Text from "../common/Text";
import {sizeFont, sizeWidth} from "../../utils/Size";
import ImagePicker from "react-native-image-picker";

export default class UploadImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            imageUri: null,
            path: ''
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                {this.renderViewAdd()}
                {this.renderPickedImage()}
            </View>
        );
    }

    showImagePicker = () => {
        const options = {
            title: 'Select Image',
            noData: true,
            mediaType: 'photo',
            quality: 0.5,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const imageUri = {uri: response.uri};
                this.setState({
                    imageUri,
                    path: response.uri,
                })
            }
        });
    };

    renderViewAdd = () => (
        <View style={styles.ViewAdd}>
            <TouchableOpacity onPress={this.showImagePicker}>
                <Image
                    style={styles.Ic_add}
                    source={require('../../../res/img/ic_add_image.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize: sizeFont(3.8)}}>Add</Text>
        </View>
    );

    renderPickedImage = () => {
        if (this.state.imageUri) {
            return (
                <Image style={styles.PickedImage} source={this.state.imageUri}/>
            )
        }
    };
}

const styles = StyleSheet.create({
    PickedImage: {
        width: sizeWidth(40),
        height: sizeWidth(26.7),
        alignSelf: 'center',
        marginBottom: sizeWidth(4)
    },
    ViewAdd: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: sizeWidth(4),
        marginBottom: sizeWidth(4)
    },
    Ic_add: {
        marginRight: sizeWidth(3),
    },
});

