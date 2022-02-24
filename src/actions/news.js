import { mockApi } from '../api'
// ================ action types ================

export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAIL = 'NEWS_FAIL';

// ================ action creators ================

export function newsSuc(nsuc) {
	return { type: NEWS_SUCCESS, list:nsuc }
}

export function newsFail(nfail) {
	return { type: NEWS_FAIL, error:nfail }
}

export const listNews = (dve) =>{
	return (dispatch, getState)=>{
		//const tt = getState();
		// dispatch(dvesrt())
		mockApi(dve).then((data)=>{
			dispatch(dvesuc(data))
		}).catch(e=>{
			dispatch(dvefil(e))
		})
	}
}

//reflect
export const listedNews = (dispatch,dve) =>{
	// dispatch(dvesrt())
	mockApi(dve).then((data)=>{
		dispatch(dvesuc(data))
	}).catch(e=>{
		dispatch(dvefil(e))
	})
}

export const listingNews = (news) => (dispatch,getState) =>{
	// dispatch(dvesrt())
    const st = getState();
    console.log('st',st,news)
	mockApi(news).then((data)=>{
		console.log(data)
        dispatch(newsSuc(data))
	}).catch(e=>{
        dispatch(newsFail("newsfail"))
	})
}
