import {acceptOrder, getListOrder, order} from "../../api/Api";
import {ACTION_ACCEPT_ORDER, ACTION_GET_LIST_ORDER} from "../Action";

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

export const actionAccept = (id,trangthai) => {
    return dispatch => {
        acceptOrder(id,trangthai).then((data) => {
            alert(data.trangthai);
            dispatch(getAcceptOrder(data.trangthai))
        }).catch(error => dispatch(alert(error)))
    }
};

export const getListOrderSuccess = (data) => {
    return {
        type: ACTION_GET_LIST_ORDER,
        data: data
    }
};

export const getAcceptOrder = (data) => {
    return {
        type: ACTION_ACCEPT_ORDER,
        data: data
    }
};