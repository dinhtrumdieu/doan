import RNFetchBlob from "react-native-fetch-blob";

export const SERVER_ADDRESS = 'http://192.168.141.235:8080';
const API_ENDPOINT = SERVER_ADDRESS + '/api/';

const getParam = (method: string, data: any, token = null) => {

    return {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(data)
    }
};

export const request = async (endpoint: string, method: string, body: any) => {
    let token = null;
    return fetch(
        API_ENDPOINT + endpoint,
        getParam(method, body, token)
    )
        .then(res => res.json())
        .then((data) => {
            return data
        })
        .catch(error => {
            throw error;
        });
};

export const createFood = (tenmonan, mota, chitiet, gia, hinhanh, rate, nguyenlieu, loaimonan, noitro) => {
    return request('mon-an/add', 'POST', {tenmonan, mota, chitiet, gia, hinhanh, rate, nguyenlieu, loaimonan, noitro});
};

export const login = (username, password) => {
    return request('login', 'POST', {username, password});
};

export const getListFood = () => {
    return request('mon-an', 'GET')
};

export const getListCategory = () => {
    return request('loai-mon-an', 'GET')
};

export const uploadImage = async (path: string) => {
    return RNFetchBlob.fetch('POST', 'http://192.168.1.27:8080/api/upload', {
        'Accept': 'application/json',
        'x-access-token': "",
        'Content-Type': 'multipart/form-data',
    }, [
        {name: 'file', filename: 'avatar.png', type: 'image/png', data: RNFetchBlob.wrap(path)}
    ]).then(data => {
        return data.json();
    }).then(json => {
    }).catch(error => {
        throw error;
    })
};