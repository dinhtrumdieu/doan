import {ACTION_LIST_PICKUP, ACTION_PICKUP_INFO} from "../Action";

export const pickupState = {
    listPickup: [],
    infoSuccess : null
};
export const pickupReducer = (state = pickupState, action) => {
    switch (action.type) {

        case ACTION_LIST_PICKUP:
            return {...state, listPickup: action.payload.listPickup};

        case ACTION_PICKUP_INFO:
            return {...state, infoSuccess: action.data};
        default:
            return state;
    }
};