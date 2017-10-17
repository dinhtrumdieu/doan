import {getListFood} from "../../api/Api";

export const actionGetList = () => {
    return dispatch => {
        getListFood().then((data) => {
            alert(JSON.stringify(data));
        }).catch(error => dispatch(alert(error)))
    }
};