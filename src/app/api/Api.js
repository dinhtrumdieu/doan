import RNFetchBlob from "react-native-fetch-blob";

export const SERVER_ADDRESS = 'http://192.168.1.26:8080';
const API_ENDPOINT = SERVER_ADDRESS + '/api/v1/';

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
            return data.data
        })
        .catch(error => {
            throw error;
        });
};

export const createFood = (name, preview, price, images) => {
    return request('create', 'POST', {name, preview, price,images});
};

export const getListFood = () => {
    return request('categories', 'GET')
};

export const uploadImage = async (path: string) => {

    return RNFetchBlob.fetch('POST', 'http://192.168.1.26:8080/api/mon-an/upload', {
        'Accept': 'application/json',
        'x-access-token': "",
        'Content-Type': 'multipart/form-data',
    }, [
        {name: 'file', filename: 'avatar.png', type: 'image/png', data: RNFetchBlob.wrap(path)}
    ]).then(data => {
        alert(JSON.stringify(data));
        return data.json();
    }).then(json => {
    }).catch(error => {
        throw error;
    })
};