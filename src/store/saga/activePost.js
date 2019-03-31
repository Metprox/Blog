import { put, call, takeLatest } from 'redux-saga/effects';
import * as actionTypes from 'Store/actions/actionTypes';
import {
    activePostRequestSuccess,
    activePostRequestError,
} from 'Store/actions/activePost';
import axios from 'Root/axios';

export function* activeRequestPost({ id }) {
    try {
        const response = yield call(axios.get, `/posts/${id}`);
        let post = response.data;
        yield put(activePostRequestSuccess(post));
    } catch (error) {
        const message = 'Failed to load post, please try again';
        yield put(activePostRequestError(message));
    }
}
export function* watchActiveRequestPost() {
    yield takeLatest(actionTypes.ACTIVE_POST_REQUEST, activeRequestPost);
}
