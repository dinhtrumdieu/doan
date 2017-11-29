import {getListCooker} from "../../api/Api";
import {ACTION_GET_LIST, ACTION_GET_LIST_COOKERS} from "../Action";

export const actionGetListCookers = () => {
    return dispatch => {
        getListCooker().then((data) => {
            dispatch(getListCookerSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListCookerSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_COOKERS,
        data: data
    }
};