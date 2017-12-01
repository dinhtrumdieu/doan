import RNFetchBlob from "react-native-fetch-blob";
import {saveImage} from "../utils/Store";

export const SERVER_ADDRESS = 'http://192.168.1.121:8080';
export const IMAGE_ADDRESS = 'http://192.168.1.121:8080/files/';
//export const SERVER_ADDRESS = 'http://demo6916417.mockable.io';
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

export const updateFood = (id,tenmonan, chitiet, gia, hinhanh, nguyenlieu, loaimonan, noitro) => {
    return request('mon-an/update', 'POST', {id,tenmonan, chitiet, gia, hinhanh, nguyenlieu, loaimonan, noitro});
};

export const order = (thoigian,khachhang,noitro,chitietdonhang,trangthai) => {
    return request('don-hang/add', 'POST', {thoigian,khachhang,noitro,chitietdonhang,trangthai});
};

export const login = (email, matkhau) => {
    return request('login', 'POST', {email, matkhau});
};

export const register = (email, matkhau,username,address) => {
    return request('register', 'POST', {email, matkhau});
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

export const getListFoodCooker = (id) => {
    return request('mon-an/noi-tro/'+id, 'GET')
};

export const getListFoodSeach = (keyword) => {
    return request('mon-an/name/'+keyword, 'GET')
};

export const getListOrder = (id) => {
    return request('don-hang/noi-tro/'+id, 'GET')
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