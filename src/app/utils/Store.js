import {
    AsyncStorage
} from 'react-native';
const KEY_TOKEN = 'access_token';
const PROFILE_INFO = 'profile_info';

export const saveToken = (token) => AsyncStorage.setItem(KEY_TOKEN, token);

export const getToken = () => {
    return AsyncStorage.getItem(KEY_TOKEN);
};

export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);

export const removeProfileInfo = () => AsyncStorage.removeItem(PROFILE_INFO);

export const saveProfileInfo = (profileInfo) => AsyncStorage.setItem(PROFILE_INFO, profileInfo);

export const getProfileInfo = () => {
    return AsyncStorage.getItem(PROFILE_INFO);
};