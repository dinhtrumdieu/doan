
import {ACTION_GET_LIST_SEARCH} from "../Action";

export const searchState = {
    listFoodSearch: [],
};
export const searchReducer = (state = searchState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_SEARCH :
            return {...state, listFoodSearch: action.data};
        default:
            return state;
    }
};