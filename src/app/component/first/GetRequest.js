import React, {Component} from "react";
import {View} from "react-native";
import ToolBar from "../common/ToolBar";
import {Request} from "../../model/Request";

export default class GetRequest extends Component {
    constructor(props) {
        super(props);
        const data = [
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),
            new Request(1, "Nguyễn Văn ", "Phở Hà Nội", require("../../../res/img/girl.png"), 2, "120000", require("../../../res/img/pho.jpg"), "4 giờ trước"),

        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Request"/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
