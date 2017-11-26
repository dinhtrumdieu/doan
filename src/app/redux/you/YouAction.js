import {ACTION_PROFILE_SUCCESS} from "../Action";
import {getProfileInfo} from "../../utils/Store";

export const profileSuccess = (user) => {
    return {
        type: ACTION_PROFILE_SUCCESS,
        payload: {
            user
        }
    }
};
export const actionGetProfile = () => {
    return async dispatch => {
        let profileInfo = await getProfileInfo();
        if (profileInfo) {
            profileInfo = JSON.parse(profileInfo);
            dispatch(profileSuccess(profileInfo));
        }
    }
};
