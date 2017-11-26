import React, {Component} from 'react';
import { TouchableOpacity, View} from 'react-native';
import Text from "../common/Text";
import {connect} from "react-redux";
import {navigateToPage} from "../../router/NavigationAction";

class YouNotLoginComponent extends Component {
    renderButton = () => (
        <TouchableOpacity
            onPress={()=>{this.props.navigateToPage('login')}}
            style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'green',
            width: '60%',
            paddingVertical: 15
        }}>
            <Text style={{
                color: '#fff',
                fontSize: 16
            }}>Login</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {this.renderButton()}
            </View>
        );
    }
}

export default connect(null,{navigateToPage})(YouNotLoginComponent);

