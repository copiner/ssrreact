import {
    NEWS_SUCCESS,
    NEWS_FAIL
} from '../actions/news';


const newsReducer = (state = {data:[],text:'news'}, action) => {
    switch(action.type) {
        case NEWS_SUCCESS:
            return {...state, data: action.list}
        case NEWS_FAIL:
            return {...state, error: action.error}
    }
    return state;
}


export default newsReducer
