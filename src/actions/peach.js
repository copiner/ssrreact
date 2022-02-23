
// ================ action types ================

export const PEACH_SUCCESS = 'PEACH_SUCCESS';
export const PEACH_FAIL = 'PEACH_FAIL';


// ================ action creators ================


export function peachSuc(psuc) {
	return { type: PEACH_SUCCESS, list:psuc }
}

export function peachFail(pfail) {
	return { type: PEACH_FAIL, list:pfail }
}
