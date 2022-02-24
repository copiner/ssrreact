import { combineReducers } from 'redux'

import peach from './peach';
import header from './header';
import news from './news';

const rootReducer = combineReducers({ header, peach, news });

export default rootReducer
