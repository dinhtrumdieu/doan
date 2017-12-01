import {getListFood} from "../../api/Api";
import {ACTION_GET_LIST} from "../Action";

export const actionGetList = () => {
    return dispatch => {
        getListFood().then((data) => {
            dispatch(getListSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListSuccess = (data) => {
    return {
        type: ACTION_GET_LIST,
        data: data
    }
};