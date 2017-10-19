import React from 'react';
import {
    Image,
    View
} from 'react-native';
import Swiper from "react-native-swiper";
import {sizeWidth} from "../../utils/Size";

const URL = 'https://github.com/facebook/react-native';

export default class SwipeComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visibleSwiper: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true,
            })
        }, 100)
    }

    _renderSwiper() {
        const {campaigns} = this.props;
        if (this.state.visibleSwiper)
            return (
                <View style={{
                    height: sizeWidth(50),
                    width: '100%',
                }}>
                    <Swiper
                        autoplay={true}
                        loop={true}
                        index={0}
                        horizontal={true}
                        autoplayTimeout={3}
                        showsPagination={true}>
                        <View style={{height: sizeWidth(50), width: '100%',}}>
                            <Image
                                resizeMode={'cover'}
                                style={{width: '100%', height: '100%'}}
                                source={require('../../../res/img/slide1.jpg')}/>
                        </View>
                        <View style={{height: sizeWidth(50), width: '100%',}}>
                            <Image
                                resizeMode={'cover'}
                                style={{width: '100%', height: '100%'}}
                                source={require('../../../res/img/slide2.jpg')}/>
                        </View>
                        <View style={{height: sizeWidth(50), width: '100%',}}>
                            <Image
                                resizeMode={'cover'}
                                style={{width: '100%', height: '100%'}}
                                source={require('../../../res/img/slide3.jpg')}/>
                        </View>
                    </Swiper>
                </View>

            )
    }

    render() {
        return (
            <View
                style={{
                    height: sizeWidth(50),
                    width: '100%',
                }}>
                {this._renderSwiper()}
            </View>
        );
    }
}
