import {ACTION_LOGIN_SUCCESS} from "../Action";

export const loginState = {
    loginToken: null
};

export const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case ACTION_LOGIN_SUCCESS:
            return {...state,loginToken:action.data};
        default:
            return state;
    }
};