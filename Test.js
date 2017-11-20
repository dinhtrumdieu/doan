import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {Text, TouchableOpacity, View} from "react-native";

export default class Example extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    render() {
        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];

        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <Dropdown
                    onChangeText={(value) => this.setState({value})}
                    label='Favorite Fruit'
                    data={data}
                />

                <TouchableOpacity onPress={()=>{alert(this.state.value)}} style={{backgroundColor:'red',padding:20,}}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>

        );
    }
}