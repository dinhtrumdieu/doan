import {
    AsyncStorage
} from 'react-native';
const KEY_TOKEN = 'access_token';
const PROFILE_INFO = 'profile_info';
const KEY_IMAGE = 'image';

export const saveToken = (token) => AsyncStorage.setItem(KEY_TOKEN, token);
export const saveImage = (token) => AsyncStorage.setItem(KEY_IMAGE, token);

export const getToken = () => {
    return AsyncStorage.getItem(KEY_TOKEN);
};

export const getImage = () => {
    return AsyncStorage.getItem(KEY_IMAGE);
};

export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);
export const removeImage = () => AsyncStorage.removeItem(KEY_IMAGE);

export const removeProfileInfo = () => AsyncStorage.removeItem(PROFILE_INFO);

export const saveProfileInfo = (profileInfo) => AsyncStorage.setItem(PROFILE_INFO, profileInfo);

export const getProfileInfo = () => {
    return AsyncStorage.getItem(PROFILE_INFO);
};