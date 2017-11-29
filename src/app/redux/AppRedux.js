import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {navigationReducer} from "../router/NavigationReducer";
import {loginReducer} from "./login/LoginReducer";
import {meReducer} from "./you/YouReducer";
import {homeReducer} from "./home/HomeReducer";

const reducer = combineReducers({
    nav: navigationReducer,
    loginState:loginReducer,
    meState:meReducer,
    homeState:homeReducer
});

export const store = createStore(reducer,applyMiddleware(thunk));
