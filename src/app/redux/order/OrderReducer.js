import {ACTION_ACCEPT_ORDER, ACTION_GET_LIST_ORDER} from "../Action";

export const orderState = {
    listOrder: [],
    accept:0,
};

export const orderReducer = (state = orderState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_ORDER:
            return {...state, listOrder: action.data};
        case ACTION_ACCEPT_ORDER:
            return {...state, accept: action.data};
        default:
            return state;
    }
};