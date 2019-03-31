// import { put, call, takeLatest } from 'redux-saga/effects';
// import * as actionTypes from 'Store/actions/actionTypes';
// import { searchRequestSuccess, searchRequestError } from 'Store/actions/search';
// import axios from 'Root/axios';

// export function* searchRequest({ term, search }) {
//     try {
//         const response = yield call(axios.get, `/users`);
//         let search = response.data.filter(item => {
//             return item.id == id;
//         });
//         yield put(searchRequestSuccess(term, search));
//     } catch (error) {
//         const message = 'No search';
//         yield put(searchRequestError(message));
//     }
// }
// export function* watchSearchRequest() {
//     yield takeLatest(actionTypes.SEARCH_REQUEST, searchRequest);
// }
