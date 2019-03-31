import { put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'Store/actions/actionTypes';
import { postsRequestSuccess, postsRequestError } from 'Store/actions/posts';
import axios from 'Root/axios';

function* requestPosts({ term }) {
    try {
        const response = yield call(axios.get, '/posts');
        let posts = response.data;
        if (term !== undefined && term !== '') {
            posts = response.data.filter(user => {
                return user.title.toLowerCase().includes(term);
            });
        }
        yield put(postsRequestSuccess(posts, term));
    } catch (error) {
        const message = 'Failed to load posts, please try again';
        yield put(postsRequestError(message, term));
    }
}
export function* watchRequestPosts() {
    yield takeEvery(actionTypes.POSTS_REQUEST, requestPosts);
}
