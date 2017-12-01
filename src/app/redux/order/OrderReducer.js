import {ACTION_GET_LIST_ORDER} from "../Action";

export const orderState = {
    listOrder: [],
};

export const orderReducer = (state = orderState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_ORDER:
            return {...state, listOrder: action.data};
        default:
            return state;
    }
};