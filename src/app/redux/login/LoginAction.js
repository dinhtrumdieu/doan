import {navigateToPage,goBack} from "../../router/NavigationAction";
import {getToken, saveProfileInfo, saveToken} from "../../utils/Store";

export const actionLogin = (email, password) => {
    return dispatch => {
        saveToken("123456789");
        dispatch(goBack());
    }
};

export const checkLogin = (action) => {
    return dispatch => {
        getToken().then(token => {
            if (token) {
                action();
            } else {
                dispatch(navigateToPage('login'))
            }
        }).catch(error => {
            dispatch(navigateToPage('login'))
        });
    }
};