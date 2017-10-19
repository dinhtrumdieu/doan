import React, {Component} from 'react';
import {
    FlatList,
    Text,
    View
} from 'react-native';
import ItemFood from "../common/ItemFood";
import {Food} from "../../model/Food";
import ItemCategoryLeft from "./ItemCategoryLeft";
import ItemCategoryRight from "./ItemCategoryRight";
import ToolBar from "../common/ToolBar";
const preview = 'Hello world constructor Hello world constructor Hello world\\n\' +\n' +
    '                    \'constructorHello world constructor\\n\' +\n' +
    '                    \'Hello world constructorHello world constructor\\n\' +\n' +
    '                    \'Hello world constructor\\n\' +\n' +
    '                    \'Hello world constructorHello world constructor';
let random = false;
export default class CategoryComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                new Food(1,'Soup',preview,'15.000',require('../../../res/img/pho.jpg')),
                new Food(2,'Phở',preview,'35.000',require('../../../res/img/food1.jpg')),
                new Food(3,'Cháo Hành',preview,'55.000',require('../../../res/img/goi.jpg')),
                new Food(4,'Mì tôm',preview,'25.000',require('../../../res/img/nuong.jpg')),
                new Food(5,'Mỡ hành',preview,'65.000',require('../../../res/img/food1.jpg')),
                new Food(6,'Gà rán',preview,'75.000',require('../../../res/img/pho.jpg')),
                new Food(7,'Soup',preview,'35.000',require('../../../res/img/nuong.jpg')),
            ],
        }
    }

    renderItem = ({item})=>{
        if( random = !random){
            return <ItemCategoryLeft item={item}/>
        }else{
            return <ItemCategoryRight item={item}/>
        }

    };

    render() {
        return (
            <View style={{flex:1}}>
                <ToolBar title="Menu"/>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}/>
            </View>

        );
    }
}
