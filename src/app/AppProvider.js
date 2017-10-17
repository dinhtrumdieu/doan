import React, {Component} from 'react';
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./redux/AppRedux";

export default class AppProvider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

