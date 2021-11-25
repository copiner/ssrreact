import axios from 'axios';
import Mock from "mockjs";

const GET_LIST = 'INDEX/GET_LIST';

//mock server
const fetchList = (params) => {

  const data = Mock.mock({
    "list|5": [
      {
        id:"@id()",
        name: "@name()"
      }
    ]
  });

  return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
      }, Mock.Random.integer(3000, 5000));
  });

};

// action
const changeList = list => ({
  type: GET_LIST,
  list
});


export const getIndexList = (server) => {
  return (dispatch, getState) => {
    // return axios.get('http://localhost:9090/course/list').then((res) => {
    //   const { list } = res.data;
    //   dispatch(changeList(list))
    // })
    return fetchList(null).then((res) => {
              dispatch(changeList(res.list))
          }).catch((e)=>{console.log(e)})
  }
}

const defaultState = {
  list: []
};

 export default (state = defaultState, action) => {
   switch(action.type) {
     case GET_LIST:
       const newState = {
         ...state,
         list: action.list
       };
       return newState;
       default:
         return state;
   }
 }
