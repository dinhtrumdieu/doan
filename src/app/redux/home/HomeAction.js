import {getListFood} from "../../api/Api";


export const actionGetList = () => {
    return dispatch => {
        getListFood().then((data) => {
            alert(JSON.stringify(data));
        }).catch(error => dispatch(alert(error)))
    }
};

export const pickupInfoSuccess = (data) => {
    return {
        type: ACTION_PICKUP_INFO,
        data: data
    }
};