export const SERVER_ADDRESS = 'https://stg-tokubuy.bap.jp';
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
        .then((data) =>{return data.data})
        .catch(error => {
            throw error;
        });
};

export const getListFood = ()=>{
    return request('categories', 'GET')
};
