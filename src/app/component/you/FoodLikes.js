import React, {Component} from 'react';
import {
    FlatList,
    View
} from 'react-native';
import {actionGetListFoodCookers} from "../../redux/cooker/CookerAction";
import {navigateToPage} from "../../router/NavigationAction";
import {connect} from "react-redux";
import ItemUpdateFood from "./ItemUpdateFood";
import ToolBar from "../common/ToolBar";
import BackIcon from "../common/BackIcon";
import {TOOL_BAR_TEXT} from "../../../res/style/AppStyle";
import Text from "../common/Text";

class FoodLikes extends Component {

    renderLeftToolBar = () => (
        <BackIcon/>
    );

    renderCenterToolBar = () => (
        <Text style={TOOL_BAR_TEXT}>Món ăn của tôi</Text>
    );

    renderItem = ({item}) => (
        <ItemUpdateFood item={item}/>
    );

    componentWillMount(){
        const item = this.props.user;
        const id = item && item.id;
        this.props.actionGetListFoodCookers(id);
    }

    render() {
        return (
            <View style={{flex:1}} >
                <ToolBar left={this.renderLeftToolBar()}
                         center={this.renderCenterToolBar()}/>
                <FlatList
                    style={{flex: 1}}
                    data={this.props.listFoodCooker}
                    numColumns={2}
                    keyExtractor={(item, index) => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

function mapState(state) {
    return {
        listFoodCooker: state.cookerState.listFoodCooker,
        user: state.meState.user,
    }
}
export default connect(mapState, {navigateToPage,actionGetListFoodCookers})(FoodLikes);

