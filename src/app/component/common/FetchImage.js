import React, {Component} from 'react';
import {Image, View, Platform} from "react-native";
import PropTypes from 'prop-types';

export default class FetchImage extends Component {

    constructor(props) {
        super(props);
    }

    renderPlaceHolder = () => {
        const {style, resizeMode} = this.props;
        const placeholder = this.props.placeholder || require('../../../res/img/empty-image.png');
        return <Image
            resizeMode={resizeMode || 'cover'}
            style={style}
            source={placeholder}/>
    };

    renderImage = () => {
        const {uri, style, resizeMode, priority} = this.props;
        if (Platform.OS === 'ios') {
            return (
                <FastImage
                    style={style}
                    onLoad={this.onLoad}
                    source={{
                        uri: uri,
                        priority: priority
                    }}
                    resizeMode={resizeMode}
                />)
        }
        return (
            <Image
                style={style}
                onLoad={this.onLoad}
                source={{
                    uri: uri,
                }}
                resizeMode={resizeMode}
            />
        )
    };


    render() {
        const {uri} = this.props;
        if (uri) {
            return this.renderImage();
        } else {
            return this.renderPlaceHolder();
        }
    }
}

FetchImage.propTypes = {
    uri: PropTypes.string,
    resizeMode: PropTypes.string,
    priority: PropTypes.string,
    placeholder: PropTypes.any,
};


