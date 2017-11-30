import {getListFood, getListFoodSeach} from "../../api/Api";
import {ACTION_GET_LIST, ACTION_GET_LIST_SEARCH} from "../Action";

export const actionGetListSearch = (keyword) => {
    return dispatch => {
        getListFoodSeach(keyword).then((data) => {
            dispatch(getListSearchSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListSearchSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_SEARCH,
        data: data
    }
};