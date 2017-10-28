import React, {Component} from 'react';
import {
    Image,
    ImageBackground, TouchableOpacity,
    View
} from 'react-native';
import Text from "../common/Text";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {navigateToPage, resetPage} from "../../router/NavigationAction";
import {connect} from "react-redux";

class ThankComponent extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../res/img/bg_app.jpg')} style={{
                flex: 1,
                backgroundColor: '#d1d1d1',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    width: '80%',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: 'transparent'
                }}>
                    <Text style={{fontSize: 18}}>Thank You for</Text>
                    <Text style={{fontSize: 23}}>YOUR ORDER</Text>
                    <View style={{
                        height: 1,
                        width: '30%',
                        borderWidth: 0.8,
                        borderColor: '#636363',
                        marginVertical: 10
                    }}/>
                    <Text>Yêu cầu của quý khách đã gửi</Text>
                    <Text>Bạn sẽ nhận được phản hồi sau :</Text>
                    <Text style={{fontSize: 24, marginTop: 10, marginBottom: 25}}>18:30</Text>
                    <Text style={{fontSize: 14}}>Cảm ơn đã chọn chúng tôi!</Text>
                </View>
                <TouchableOpacity onPress={()=>{this.props.resetPage('Main')}} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 7,
                    width: '70%',
                    backgroundColor: APP_COLOR,
                    borderRadius: 20,
                    position:'absolute',
                    bottom:50,
                }}>
                    <Image style={{width: 15, height: 15}} source={require('../../../res/img/left-arrow.png')}/>
                    <Text style={{color: '#fff', marginLeft: 10}}>BACK TO HOME</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default connect(null ,{navigateToPage,resetPage})(ThankComponent)

