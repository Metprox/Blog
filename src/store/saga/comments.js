import { put, call, takeLatest } from 'redux-saga/effects';
import * as actionTypes from 'Store/actions/actionTypes';
import {
    commentsRequestSuccess,
    commentsRequestError,
} from 'Store/actions/comments';
import axios from 'Root/axios';

export function* commentsRequest({ id }) {
    try {
        const response = yield call(axios.get, `/comments`);
        let comments = response.data.filter(comment => {
            return comment.postId == id;
        });
        yield put(commentsRequestSuccess(comments));
    } catch (error) {
        const message = 'Failed to load post, please try again';
        yield put(commentsRequestError(message));
    }
}
export function* watchCommentsRequest() {
    yield takeLatest(actionTypes.COMMENTS_REQUEST, commentsRequest);
}
