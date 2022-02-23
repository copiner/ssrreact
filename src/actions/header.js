
// ================ action types ================

export const HEADER_SUCCESS = 'HEADER_SUCCESS';
export const HEADER_FAIL = 'HEADER_FAIL';

// ================ action creators ================

export function headerFail(hfail) {
	return { type: HEADER_FAIL, list:hfail }
}

export function headerSuc(hsuc) {
	return { type: HEADER_SUCCESS, list:hsuc }
}
