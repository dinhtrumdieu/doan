import {ACTION_GET_LIST} from "../Action";

export const homeState = {
    listFood: [],
};
export const homeReducer = (state = homeState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST:
            return {...state, listFood: action.data};
        default:
            return state;
    }
};