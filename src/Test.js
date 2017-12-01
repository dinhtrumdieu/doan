import React, {Component} from 'react';
import {
    Picker,
    View
} from 'react-native';
import {Loaimonan} from "./app/model/Loaimonan";

const data = [
    new Loaimonan(3, "Món phở", "abc", "1234"),
    new Loaimonan(7, "Món Cháo", "abc", "1234"),
    new Loaimonan(8, "Món Hàng", "abc", "1234"),
    new Loaimonan(1, "Món Ngon", "abc", "1234"),
    new Loaimonan(6, "Món Qúa", "abc", "1234"),
];

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'Hello',
        }
    }

    renderPickerItem = (loaimonan) => {
        return (
            <Picker.Item label={loaimonan.name} value={loaimonan.name}/>
        );
    };

    renderItem = () => {
        let listPickerItem = [];
        for (i = 0; i < data.length; i++) {
            listPickerItem.push(this.renderPickerItem(data[i]))
        }
        return listPickerItem
    };

    getID = (itemValue,itemIndex)=>{
        this.setState({
            language: itemValue,
        });
        alert(data[itemIndex].id)
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.getID(itemValue,itemIndex)}>
                    {this.renderItem()}
                </Picker>
            </View>
        );
    }
}

