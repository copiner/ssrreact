
import { GET_LIST } from "../action"

const defaultState = {
  list: []
};

 export default (state = defaultState, action) => {
   switch(action.type) {
     case GET_LIST:
       return { ...state, list: action.list };
       default:
         return state;
   }
 }
