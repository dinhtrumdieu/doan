import {ACTION_GET_LIST_CATEGORY, ACTION_LOGIN_SUCCESS, GET_LIST_ITEM_CATEGORY} from "../Action";

export const categoryState = {
    listCategory: null,
    listItemCategory:null,
};

export const categoryReducer = (state = categoryState, action) => {
    switch (action.type) {
        case ACTION_GET_LIST_CATEGORY:
            return {...state,listCategory:action.data};
        case GET_LIST_ITEM_CATEGORY:
            return {...state,listItemCategory:action.data};
        default:
            return state;
    }
};