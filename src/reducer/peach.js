import {
    PEACH_SUCCESS,
    PEACH_FAIL
} from '../actions/peach';


const peachReducer = (state = {data:[],text:'peach'}, action) => {
    switch(action.type) {
        case PEACH_SUCCESS:
            return {...state, data: action.list}
        case PEACH_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default peachReducer
