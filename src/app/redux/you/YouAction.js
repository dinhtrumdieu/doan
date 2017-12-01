import {ACTION_GET_LIST_ORDER_HISTORY, ACTION_PROFILE_SUCCESS} from "../Action";
import {getProfileInfo} from "../../utils/Store";
import {getListOrderHistory} from "../../api/Api";

export const profileSuccess = (user) => {
    return {
        type: ACTION_PROFILE_SUCCESS,
        payload: {
            user
        }
    }
};

export const getListOrderHistorySuccess = (data) => {
    return {
        type: ACTION_GET_LIST_ORDER_HISTORY,
        data: data
    }
};

export const actionGetListOrderHistory = (id) => {
    return dispatch => {
        getListOrderHistory(id).then((data) => {
            dispatch(getListOrderHistorySuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const actionGetProfile = () => {
    return async dispatch => {
        let profileInfo = await getProfileInfo();
        if (profileInfo) {
            profileInfo = JSON.parse(profileInfo);
            dispatch(profileSuccess(profileInfo));
        }
    }
};
