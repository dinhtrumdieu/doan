import {ACTION_PROFILE_SUCCESS} from "../Action";

export const meState = {
    user: null,
};

export const meReducer = (state = meState, action) => {
    switch (action.type) {
        case ACTION_PROFILE_SUCCESS:
            return {...state, user: action.payload.user};
        default:
            return state;
    }
};