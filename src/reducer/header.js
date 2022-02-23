import {
    HEADER_SUCCESS,
    HEADER_FAIL
} from '../actions/header';


const headerReducer = (state = {data:[],text:'header'}, action) => {
    switch(action.type) {
        case HEADER_SUCCESS:
            return {...state, data: action.list}
        case HEADER_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default headerReducer
