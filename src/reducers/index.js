import { combineReducers } from 'redux';
import AnimalReducer from './reducer_animals';
import FetchReducer from './reducer_fetch';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    attribute: AnimalReducer,
    fetchData: FetchReducer,
    form: formReducer
});

export default rootReducer;
