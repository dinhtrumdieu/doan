import {getListCooker, getListFoodCooker} from "../../api/Api";
import {ACTION_GET_LIST, ACTION_GET_LIST_COOKERS, GET_LIST_FOOD_COOKERS} from "../Action";

export const actionGetListCookers = () => {
    return dispatch => {
        getListCooker().then((data) => {
            dispatch(getListCookerSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const actionGetListFoodCookers = (id) => {
    return dispatch => {
        getListFoodCooker(id).then((data) => {
            dispatch(getListFoodCookerSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListCookerSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_COOKERS,
        data: data
    }
};

export const getListFoodCookerSuccess = (data) => {
    return {
        type: GET_LIST_FOOD_COOKERS,
        data: data
    }
};