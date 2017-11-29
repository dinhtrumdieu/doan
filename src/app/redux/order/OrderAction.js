import {order} from "../../api/Api";

export const actionOrder = (path)=>{
    return dispatch =>{
        order(path).then(data=>{
            //  alert(JSON.stringify(data));
        });
    }
};