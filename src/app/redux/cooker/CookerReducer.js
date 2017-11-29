import {ACTION_GET_LIST, ACTION_GET_LIST_COOKERS, GET_LIST_FOOD_COOKERS} from "../Action";

export const cookerState = {
    listCooker: [],
    listFoodCooker:[],
};
export const cookerReducer = (state = cookerState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_COOKERS:
            return {...state, listCooker: action.data};
        case GET_LIST_FOOD_COOKERS:
            return {...state, listFoodCooker: action.data};
        default:
            return state;
    }
};