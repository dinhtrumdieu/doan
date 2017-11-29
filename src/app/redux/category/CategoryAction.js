import {ACTION_GET_LIST_CATEGORY, GET_LIST_ITEM_CATEGORY} from "../Action";
import {getListCategory, getListItemCategory} from "../../api/Api";


export const  actionGetListCategory = () => {
    return dispatch => {
        getListCategory().then((data) => {
            dispatch(getListSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const  actionGetListItemCategory = (id) => {
    return dispatch => {
        getListItemCategory(id).then((data) => {
            dispatch(getListItemSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_CATEGORY,
        data: data
    }
};

export const getListItemSuccess = (data) => {
    return {
        type: GET_LIST_ITEM_CATEGORY,
        data: data
    }
};