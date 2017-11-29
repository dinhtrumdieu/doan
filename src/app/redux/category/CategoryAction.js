import {getListFood} from "../../api/Api";
import {ACTION_GET_LIST} from "../Action";


export const  actionGetListCategory = () => {
    return dispatch => {
        getListCategory().then((data) => {
            alert(JSON.stringify(data));
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