import {navigateToPage, goBack} from "../../router/NavigationAction";
import {getToken, saveProfileInfo, saveToken} from "../../utils/Store";
import {ACTION_LOGIN_SUCCESS, ACTION_PROFILE_SUCCESS} from "../Action";
import {Cooker} from "../../model/Cooker";
import {login} from "../../api/Api";

export const profileSuccess = (user) => {
    return {
        type: ACTION_PROFILE_SUCCESS,
        payload: {
            user
        }
    }
};

const user = new Cooker("1232", "Nguyen Trung Dinh", "12323", 5, 6, 6, true);

export const loginTokenSuccess = (token) => {
    return {
        type: ACTION_LOGIN_SUCCESS,
        data: token

    }
};

/*export const actionLogin = (email, password) => {
    return dispatch => {
        dispatch(showLoading());
        login(email, password).then(data => {
            dispatch(hideLoading());
            saveToken(data.data.auth.authToken);
            dispatch(loginTokenSuccess(data.data.auth.authToken));
            getProfile().then(data => {
                dispatch(hideLoading());
                saveProfileInfo(JSON.stringify(data.data.me));
                dispatch(profileSuccess(data.data.me));
                dispatch(goBack());
            }).catch(error => {
                alert(error);
                dispatch(hideLoading());
            })
        }).catch(error => {
            dispatch(hideLoading());
            alert(error);
        })
    }
};*/

export const actionLogin = (username, password) => {
    return dispatch => {
        login(username, password).then(data => {
            alert(JSON.stringify(data));
            /*saveToken("123456789");
            dispatch(loginTokenSuccess("123456789"));
            saveProfileInfo(JSON.stringify(user));
            dispatch(profileSuccess(user));
            dispatch(goBack());*/
        }).catch(error => {
            alert("Error" + error);
        })
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