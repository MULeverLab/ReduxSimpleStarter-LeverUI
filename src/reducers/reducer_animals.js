import {FETCH_ANIMAL_ATTRIBUTE} from "../actions";
import _ from 'lodash';

export default function (state={}, action){
    switch (action.type){
        case FETCH_ANIMAL_ATTRIBUTE:
            console.log(action);
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}