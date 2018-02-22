import axios from 'axios';

export const FETCH_ANIMAL_ATTRIBUTE = 'fetch_animal_attribute';
export const SAVE_ANIMAL_ATTRIBUTE ='save_animal_attribute';
export const FETCH = 'fetch';

export function fetchAnimals (type){
    const request = axios.get(`http://localhost:8090/get/${type}`);
    return {
        type: FETCH_ANIMAL_ATTRIBUTE,
        payload: request
    };
}

export function fetch (path) {
    const request = axios.get(`http://localhost:8090/get/${path}`);
    return {
        type: FETCH,
        payload: request
    };
}

export function saveFunction(values, type, callback){
    const request = axios.post(`http://localhost:8090/save/${type}`, values)
        .then(()=>callback());
        return {
            type:SAVE_ANIMAL_ATTRIBUTE,
            payload: request
        }
}



