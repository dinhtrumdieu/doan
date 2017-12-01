import {ACTION_GET_LIST_ORDER_HISTORY, ACTION_PROFILE_SUCCESS} from "../Action";

export const meState = {
    user: null,
    listOrderHistory:null,
};

export const meReducer = (state = meState, action) => {
    switch (action.type) {
        case ACTION_PROFILE_SUCCESS:
            return {...state, user: action.payload.user};
        case ACTION_GET_LIST_ORDER_HISTORY:
            return {...state, listOrderHistory: action.data};
        default:
            return state;
    }
};