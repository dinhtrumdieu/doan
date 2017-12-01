import {getListOrder, order} from "../../api/Api";
import {ACTION_GET_LIST_ORDER} from "../Action";

export const actionOrder = (thoigian,khachhang , cooker , chitietdonhang,trangthai)=>{
    return dispatch =>{
        order(thoigian,khachhang,cooker,chitietdonhang,trangthai).then(data=>{
             alert(JSON.stringify(data));
        }).catch((error)=>{
            alert(error);
        });
    }
};

export const actionGetListOrder = (id) => {
    return dispatch => {
        getListOrder(id).then((data) => {
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