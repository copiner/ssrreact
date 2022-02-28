/*
useReducer
*/

import React,{ useReducer } from 'react';

const data = {
    age:10
}


const reducer = (state,action) =>{
    switch (action.type) {
        case 'changeAge':
            return {
                ...state,
                age:action.age
            }
        default:
            return {
                ...state
            };
    }
}

export default function useLocalReducer(){
  const [state,dispatch] =  useReducer(reducer,data);

  return [
    state,
    dispatch
  ]
}

