import { combineReducers } from 'redux'

import peach from './peach';
import header from './header';

const rootReducer = combineReducers({ header, peach });

export default rootReducer
