import {ACTION_GET_LIST, ACTION_GET_LIST_COOKERS} from "../Action";

export const cookerState = {
    listCooker: [],
};
export const cookerReducer = (state = cookerState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_COOKERS:
            return {...state, listCooker: action.data};
        default:
            return state;
    }
};