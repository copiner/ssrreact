import fetchList  from "../api"

//action
export const GET_LIST = 'INDEX/GET_LIST';

// action creator
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
