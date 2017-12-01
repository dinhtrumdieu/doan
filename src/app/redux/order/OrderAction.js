import {getListOrder, order} from "../../api/Api";
import {ACTION_GET_LIST_ORDER} from "../Action";

export const actionOrder = (path)=>{
    return dispatch =>{
        order(path).then(data=>{
            //  alert(JSON.stringify(data));
        });
    }
};

export const actionGetListOrder = () => {
    return dispatch => {
        getListOrder().then((data) => {
            dispatch(getListOrderSuccess(data))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListOrderSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_ORDER,
        data: data
    }
};