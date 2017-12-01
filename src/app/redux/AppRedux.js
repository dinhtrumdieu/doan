import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {navigationReducer} from "../router/NavigationReducer";
import {loginReducer} from "./login/LoginReducer";
import {meReducer} from "./you/YouReducer";
import {homeReducer} from "./home/HomeReducer";
import {categoryReducer} from "./category/CategoryReducer";
import {cookerReducer} from "./cooker/CookerReducer";
import {searchReducer} from "./search/SearchReducer";
import {orderReducer} from "./order/OrderReducer";

const reducer = combineReducers({
    nav: navigationReducer,
    loginState:loginReducer,
    meState:meReducer,
    homeState:homeReducer,
    categoryState:categoryReducer,
    cookerState:cookerReducer,
    searchState: searchReducer,
    orderState: orderReducer,
});

export const store = createStore(reducer,applyMiddleware(thunk));
