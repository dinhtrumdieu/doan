import RNFetchBlob from "react-native-fetch-blob";
import {saveImage} from "../utils/Store";

export const SERVER_ADDRESS = 'http://192.168.0.156:8080';
//export const SERVER_ADDRESS1 = 'http://demo6916417.mockable.io';
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

export const createFood = (tenmonan, chitiet, gia, hinhanh, nguyenlieu, loaimonan, noitro) => {
    return request('mon-an/add', 'POST', {tenmonan, chitiet, gia, hinhanh, nguyenlieu, loaimonan, noitro});
};

export const order = (tenmonan, mota, chitiet, gia, hinhanh, rate, nguyenlieu, loaimonan, noitro) => {
    return request('mon-an/add', 'POST', {tenmonan, mota, chitiet, gia, hinhanh, rate, nguyenlieu, loaimonan, noitro});
};

export const login = (email, matkhau) => {
    return request('login', 'POST', {email, matkhau});
};

export const getListFood = () => {
    return request('mon-an', 'GET')
};

export const getListCategory = () => {
    return request('loai-mon-an', 'GET')
};

export const getListItemCategory = (id) => {
    return request('mon-an/loai-mon-an/'+id, 'GET')
};

export const getListCooker = () => {
    return request('noi-tro', 'GET')
};

export const uploadImage = async (path: string) => {
    return RNFetchBlob.fetch('POST', API_ENDPOINT+'/upload', {
        'Accept': 'application/json',
        'x-access-token': "",
        'Content-Type': 'multipart/form-data',
    }, [
        {name: 'file', filename: 'avatar.png', type: 'image/png', data: RNFetchBlob.wrap(path)}
    ]).then(data => {
       // alert(JSON.stringify(data.json().fileName));
         saveImage(data.json().fileName);
        return data.json();
    }).then(json => {
    }).catch(error => {
        throw error;
    })
};