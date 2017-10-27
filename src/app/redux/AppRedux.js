import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {navigationReducer} from "../router/NavigationReducer";

const reducer = combineReducers({
    nav: navigationReducer,
});

export const store = createStore(reducer,applyMiddleware(thunk));
